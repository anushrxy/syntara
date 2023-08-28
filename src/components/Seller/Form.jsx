import React, { useEffect } from "react";
import { useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from "wagmi";
import { parseAbi, parseEther } from "viem";
import { ethers } from "ethers";

function Form() {
  const [eventName, setEventName] = useState("");
  const [genre, setGenre] = useState("");
  const [venue, setVenue] = useState("");
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [receipt, setReceipt] = useState("");
  const [deployedContract, setDeployedContract] = useState("");
  const [ipfsDetails, setIpfsDetails] = useState({});
  const [buttonState, setButtonState] = useState("List Tickets");

  const contractAddress = "0x6e87f7782fCc8344F828857BdB0E402c09a3F29E";
  const abi = [
    {
      inputs: [
        {
          internalType: "string",
          name: "contractName",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
      ],
      name: "deployNewContract",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "deployedContracts",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getLastContract",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  async function createContract() {
    setButtonState("Uploading on IPFS...");

    // const form = new FormData();
    // form.append(
    //   "filePath", "");
    // form.append("name", eventName);
    // form.append("description", venue,genre);

    // const options = {
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //     "X-API-Key": "pk_live_2a7ca841-dbcb-4dd3-8e40-aaa09155ab0e",
    //   },
    // };

    // options.body = form;

    // fetch("https://api.verbwire.com/v1/nft/store/metadataFromImage", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err));

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    const transaction = await contractInstance.deployNewContract(
      eventName,
      eventName
    );
    console.log("Transaction: ", transaction);
    const receipt = await transaction.wait();
    console.log("Receipt: ", receipt);
    const contractInstance2 = new ethers.Contract(contractAddress, abi, signer);
    const lastContract = await contractInstance2.getLastContract();
    console.log("Last Contract: ", lastContract);
  }

  useEffect(() => {
    if (receipt) {
      console.log("Hello");
      // getLastContract();
    }
  }, [receipt]);

  async function getLastContract() {
    console.log("Getting Last Contract...");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contractAddress = "0x6e87f7782fCc8344F828857BdB0E402c09a3F29E";
    const abi = parseAbi([
      "function getLastContract() public view returns (address)",
    ]);
    const contractInstance2 = new ethers.Contract(contractAddress, abi, signer);
    const lastContract = await contractInstance2.getLastContract();
    console.log("Last Contract: ", lastContract);
  }

  // const { data, isError, status } = useContractRead({
  //   address: '0x6e87f7782fCc8344F828857BdB0E402c09a3F29E',
  //   abi: parseAbi(['function getLastContract() public view returns (address)']),
  //   functionName: 'getLastContract',
  // });

  // useEffect(() => {
  //   console.log("Status: ", status);
  //   if(status === "success"){
  //     console.log("Data New: ", data);
  //   }
  // }, [status])

  return (
    <>
      <div className="mx-auto w-screen">
        <div className="mx-auto max-w-screen-lg px-4 pt-2 pb-16 sm:px-6 lg:px-8">
          <div className="">
            <div className="bg-bg-tertiary p-8 shadow-lg lg:p-12">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" for="event-name">
                    Event Name
                  </label>
                  <input
                    className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
                    placeholder="Event Name"
                    type="event-name"
                    id="event-name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="venue">
                      Venue
                    </label>
                    <input
                      className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
                      placeholder="Venue"
                      type="Venue"
                      id="Venue"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="genre">
                      Genre
                    </label>
                    <input
                      className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
                      placeholder="Genre"
                      type="genre"
                      id="genre"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label for="file-input" class="sr-only">
                    Choose file
                  </label>
                  <input
                    type="file"
                    name="file-input"
                    id="file-input"
                    placeholder="Upload NFT Image."
                    class="block w-full shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-bg-primary dark:border-gray-700 dark:text-gray-400
                    file:bg-transparent file:border-0
                    file:bg-gray-200 file:mr-4
                    file:py-3 file:px-4
                    dark:file:bg-color-secondary dark:file:text-gray-200"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="seats">
                      Seats Quantity
                    </label>
                    <input
                      className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
                      placeholder="Seats Quantity"
                      type="seats"
                      id="seats"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="price">
                      Price
                    </label>
                    <input
                      className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
                      placeholder="Price Per Ticket"
                      type="price"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-4"></div>
              </form>
              <button
                className="inline-block w-full bg-color-secondary px-5 py-3 font-medium text-white sm:w-auto"
                onClick={() => {
                  console.log("button clicked");
                  createContract();
                }}
              >
                {"List Tickets"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
