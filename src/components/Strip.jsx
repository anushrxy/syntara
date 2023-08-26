import React from "react";

function Strip() {
  return (
    <div className="md:flex items-center justify-center inline-block bg-color-primary text-bg-primary w-[100%] overflow-hidden">
      <div className="flex gap-8 text-center items-center text-sm md:text-xl font-bold custom-strip whitespace-nowrap">
        <p className="text inline-block">Book With Ease</p>
        <div className="circle hidden lg:block">&bull;</div>
        <p className="text inline-block">Collectible Memories</p>
        <div className="circle hidden lg:block">&bull;</div>
        <p className="text inline-block">Empower With Choices</p>
        <div className="circle hidden lg:block">&bull;</div>
        <p className="text inline-block">Elevate Security</p>
      </div>
    </div>
  );
}

export default Strip;
