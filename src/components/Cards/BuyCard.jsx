import React, { useEffect } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseAbi, parseEther } from "viem";
import { ethers } from "ethers";
import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const BuyCard = ({
  imageUrl,
  title,
  venue,
  genre,
  price,
  task,
  remaining,
  sold,
  contract,
  metadata,
}) => {
  async function handleBuy() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(
      contract,
      parseAbi(["function buyTicket(string memory tokenURI) public payable"]),
      signer
    );

    const transaction = await contractInstance.buyTicket(metadata, {
      value: parseEther(price),
    });

    if (transaction) {
      addContract(
        contract,
        title,
        imageUrl,
        price,
        Number(Number(remaining) - 1),
        sold + 1,
        venue,
        genre
      );
    }
  }

  const addContract = async (
    contractAddress,
    name,
    imgUrl,
    price,
    remaining,
    sold,
    venue,
    genre
  ) => {
    await setDoc(doc(db, "contracts", contractAddress), {
      name: name,
      imgUrl: imgUrl,
      price: price,
      remaining: remaining,
      sold: sold,
      venue: venue,
      genre: genre,
    });
    console.log("Document written with ID: ", contractAddress);
  };

  return (
    <div className="bg-bg-secondary shadow-bg-tertiary overflow-hidden shadow-md group relative block max-w-[280px]">
      {console.log(imageUrl)}
      <img
        className="h-[300px] w-full object-cover sm:h-72"
        src={imageUrl}
        alt="Event"
      />
      <div className="p-4 text-color-primary text-center">
        <div className="relative pt-1 pb-3 px-3">
          <h3 className="mt-1 text-3xl text-color-primary font-bold">
            {title}
          </h3>
          <p className="mt-1.5 text-lg text-color-secondary">{`Venue: ${venue}`}</p>
          <p className="mt-0 text-md text-color-secondary">{`( ${genre} )`}</p>
          <p className="mt-1 font-semibold text-2xl text-color-primary">{`${price} ETH`}</p>
          <div className="flex items-center justify-center">
            <button
              onClick={handleBuy} // Use the handleBuy function
              className="mt-4 mx-1 block w-[50%] py-2 text-sm font-medium text-color-primary transition bg-bg-tertiary"
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
