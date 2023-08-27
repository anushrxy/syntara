import React, { useEffect } from "react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { parseAbi, parseEther } from 'viem'
import { ethers } from "ethers"

const BuyCard = ({ imageUrl, title, venue, genre, price, task, contract, metadata }) => {
  

  // Prepare the contract write function
  // const { config, error,  } = usePrepareContractWrite({
  //   address: contract,
  //   abi: parseAbi(["function buyTicket(string memory tokenURI) public payable"]),
  //   functionName: "buyTicket",
  //   args: [metadata],
  //   value: parseEther(price),
  // });

  // // Function to handle the buy action
  // const handleBuy = async () => {
  //   if (write) {
  //     await write();
  //   }
  // };

  // // useEffect to handle the result of the transaction
  // useEffect(() => {
  //   if (config.isSuccess) {
  //     console.log("Transaction Hash: ", config.data.hash);
  //   }
  // }, [config.isSuccess, config.data]);
  async function handleBuy() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contract, parseAbi(["function buyTicket(string memory tokenURI) public payable"]), signer);
    
      const transaction = await contractInstance.buyTicket(metadata, { value: parseEther(price) });
      const receipt = await transaction.wait();
      console.log("Receipt: ", receipt);
  }
  
  

  return (
    <div className="bg-bg-secondary shadow-bg-tertiary overflow-hidden shadow-md group relative block max-w-[280px]">
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
