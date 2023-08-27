import React from "react";
import Button from "./shared/Button";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center gap-10 -rotate-45 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border-bg-tertiary border-[30px] lg:border-[50px] rounded-full absolute top-9 right-28 md:top-36 md:right-60 -z-10">
        <div className="w-[60px] lg:w-[150px] h-[60px] lg:h-[150px] border-bg-tertiary border-[15px] lg:border-[30px] rounded-full"></div>
        <div className="w-[60px] lg:w-[150px] h-[60px] lg:h-[150px] border-bg-tertiary border-[15px] lg:border-[30px] rounded-full"></div>
      </div>
      <div className="py-10 px-4 flex flex-col lg:flex-row items-center justify-around">
        <div className="lg:w-1/2">
          <p className="text-center md:text-start text-4xl md:text-7xl font-bold">
            Revolutionizing
          </p>
          <div className="flex lg:justify-normal justify-center items-center md:items-end">
            <div className="mt-2 md:mt-0 lg:mr-6">
              <p className="hidden lg:block text-[17px]">
                Unique. Secure. Transparent
              </p>
              <div className="hidden lg:block bg-color-secondary h-[8px] w-[123%] mb-[6px]"></div>
            </div>
            <p className="text-4xl md:text-7xl font-bold text-color-secondary">
              T
            </p>
            <p className="text-4xl md:text-7xl font-bold">icketing</p>
          </div>
          <div className="mt-4 text-xl md:text-4xl font-medium flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-end">
              <p>"Unleash the power of NFTs"</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="113"
                height="10"
                viewBox="0 0 163 10"
                fill="none"
                className="max-w-[70px] lg:max-w-[100%]"
              >
                <path
                  d="M2.70336 3.29301C35.6756 3.29301 68.6479 3.29301 101.62 3.29301C116.082 3.29301 130.591 3.42234 144.995 2.9568C149.996 2.79517 164.936 2.87216 160.021 2.54587C145.698 1.59502 127.907 2.14621 113.057 2.28437C85.1763 2.54378 58.2093 3.4707 30.748 4.67522C20.5262 5.12358 1 7.32757 1 7.32757C1 7.32757 6.92122 7.32757 9.88183 7.32757C15.8819 7.32757 21.7357 7.38866 27.6455 7.06607C37.4085 6.53316 47.4838 6.92461 57.211 6.39365C66.5549 5.88362 76.4482 5.36625 85.9249 5.31029C105.931 5.19216 125.993 4.63787 145.969 4.63787C148.699 4.63787 153.81 4.83406 147.854 4.56315C133.349 3.90335 118.564 4.64813 104.054 4.9554C89.7121 5.25908 75.0487 5.31029 60.6786 5.31029C52.9851 5.31029 45.398 5.64651 37.744 5.64651C35.1564 5.64651 32.4027 5.54129 29.9572 5.83329C27.7097 6.10166 17.6456 6.63694 21.4404 6.65515C41.6661 6.75218 62.7836 7.71728 82.8832 6.72986C91.9721 6.28335 102.385 6.31893 111.536 6.31893C116.903 6.31893 123.616 6.67335 128.631 6.05743C131.885 5.65779 137.498 5.31029 141.102 5.31029C174.019 5.31029 75.0637 5.18725 42.4283 6.50572C32.7407 6.89709 23.2453 7.83493 13.4711 7.98132C12.8024 7.99134 10.794 8 11.4635 8C19.7387 8 28.0107 7.99253 36.284 7.92529C59.82 7.734 83.1048 6.31893 106.548 6.31893C116.187 6.31893 125.646 5.98272 135.201 5.98272"
                  stroke="#FE8054"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-sm sm:text-base mt-2 lg:mt-4 max-w-[400px] flex flex-col justify-center items-center lg:block text-center lg:text-start lg:mx-0 mx-auto">
            <span className="inline">
              Experience the Future of Ticketing with{" "}
              <p className="inline text-color-secondary font-semibold">
                Syntara
              </p>
              : Book, Own, and Trade Event Passes like Never Before. Join the
              Revolution Today!
            </span>
            <div className="flex flex-col lg:flex-row gap-2 mt-6">
              <Button goTo={"/buyer"}>I'm a Buyer</Button>
              <Button goTo={"/seller"}>I'm a Seller</Button>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dmofs5r4h/image/upload/v1692982991/Frame_sov9yh.png"
          alt="hero-img"
          className="hidden lg:block w-full md:w-1/2 mt-6 md:mt-0 max-w-[300px] h-auto max-h-[600px]"
        />
      </div>
    </>
  );
}

export default Hero;
