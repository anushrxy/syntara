import React, { useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { useNetwork, useSwitchNetwork } from 'wagmi'

function NavButton({ mobile }) {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { chains, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  const { chain } = useNetwork();
  console.log('Connected to: ', address); 
  console.log('Chain: ', chain); 

  // useEffect(() => {
  //   if(chain.id !== '1313161555') {
  //     useSwitchNetwork('1313161555')
  //   }
  // }, [])
  // useSwitchNetwork('1313161555');
  useEffect(() => {
    if(chain?.id !== '1313161555') {
      setTimeout(() => {
        switchNetwork?.('1313161555')
      }, 2500);
    }
  }, [chain, isConnected])
  


  return (
    <div
      className={`cursor-pointer ${mobile === "true" ? "flex md:hidden" : mobile === "false" ? "hidden md:flex" : "flex items-center"} flex-col`}
    >
      {/* {isConnected && <div>Connected to {activeConnector.name}</div>} */}

      {!isConnected && connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          className="bg-[#7E22B5] py-[7px] px-[21px] absolute translate-x-[-4px] translate-y-[-4px] transition-all  hover:translate-x-[0px]  hover:translate-y-[0px]"
        >
          {!isLoading &&`Connect Wallet`}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            "Connecting..."}
        </button>
      ))}
      
      {/* <button >
        Connect Wallet
      </button> */}
      <div className="bg-bg-primary py-[7px] px-[21px]">
        {isConnected ? 'Connected' : isLoading ? 'Connecting...' : 'Connect Wallet'}
      </div>
    </div>
  );
}

export default NavButton;
