import React from "react";

function NavButton({ mobile }) {
  return (
    <div
      className={`cursor-pointer ${
        mobile ? "flex md:hidden" : "hidden md:flex"
      } items-center flex-col`}
    >
      <button className="bg-[#7E22B5] py-[7px] px-[21px] absolute translate-x-[-4px] translate-y-[-4px] transition-all  hover:translate-x-[0px]  hover:translate-y-[0px]">
        Connect Wallet
      </button>
      <div className="bg-bg-primary py-[7px] px-[21px]">Connect Wallet</div>
    </div>
  );
}

export default NavButton;
