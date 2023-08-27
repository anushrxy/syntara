import React from "react";

function SpecialityCard({ title, children, style }) {
  return (
    <div className={"cursor-pointer flex items-center flex-col " + style}>
      <div className=" flex flex-col sm:flex-row sm:gap-5 justify-center items-center bg-color-primary text-bg-primary py-[7px] px-[21px] absolute translate-x-[-4px] translate-y-[-4px] transition-all  hover:translate-x-[0px]  hover:translate-y-[0px] sm:max-w-[600px] max-w-[80%] ">
        <p className="text-lg font-semibold whitespace-nowrap sm:-rotate-90">
          {title}
        </p>
        <img
          src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1693119012/Group_glyloj.png"
          alt="dotted-line"
          className="hidden sm:block"
        />
        <p className="text-center sm:text-left">{children}</p>
      </div>

      <div
        className="bg-bg-secondary 
        flex-col sm:flex-row
       flex sm:gap-5 justify-center items-center py-[7px] px-[21px] relative -z-10 sm:max-w-[600px] max-w-[80vw]
      "
      >
        <p className="text-lg font-semibold whitespace-nowrap sm:-rotate-90">
          {title}
        </p>
        <img
          src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1693119012/Group_glyloj.png"
          alt="dotted-line"
          className="hidden sm:block"
        />
        <p className="text-center sm:text-left">{children}</p>
      </div>
    </div>
  );
}

export default SpecialityCard;
