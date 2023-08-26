import React from "react";

function Button({ children }) {
  return (
    <div className="cursor-pointer flex items-center flex-col">
      <button className="bg-[#7E22B5] py-[7px] px-[21px] absolute translate-x-[-4px] translate-y-[-4px] transition-all  hover:translate-x-[0px]  hover:translate-y-[0px]">
        {children}
      </button>
      <div className="bg-bg-secondary py-[7px] px-[21px]">{children}</div>
    </div>
  );
}

export default Button;
