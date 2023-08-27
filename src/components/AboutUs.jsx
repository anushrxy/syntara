import React from "react";
import AboutCard from "./Cards/AboutCard";

function AboutUs() {
  const card1Descriptions = [
    "Authenticity",
    "Uniqueness",
    "Cherished Collectibles",
  ];
  const card2Descriptions = ["Security", "Community", "Lasting Memories"];
  const card3Descriptions = [
    "Team of 3",
    "Anushrey Jain",
    "Raj Aryan",
    "Anmol Pattnayak",
  ];
  return (
    <div className="py-10 px-4 bg-bg-tertiary" id="about">
      <div className=" flex flex-col items-center justify-start  w-[90%] mx-auto">
        <div className="self-start">
          <p className="text-4xl md:text-7xl font-bold ">About Us</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="340"
            height="10"
            viewBox="0 0 435 10"
            fill="none"
            className="min-w-[30%] max-w-[50%] md:max-w-[100%]"
          >
            <path
              d="M2 2.27273C32.9 2.27273 63.8001 2.27273 94.7001 2.27273C113.698 2.27273 132.554 2.71056 151.523 2.80303C172.422 2.90491 193.262 2.57701 214.156 2.54545C246.287 2.49693 278.251 2 310.437 2C348.511 2 386.569 2.27273 424.623 2.27273C471.23 2.27273 331.338 2.20112 284.83 2.87879C220.891 3.81044 156.786 5 92.6731 5C70.3765 5 48.0798 5 25.7831 5C25.3086 5 19.7147 5.13579 19.2292 4.86364C18.8634 4.65854 21.1498 4.74801 22.1346 4.74242C38.3658 4.65028 54.6897 4.71831 70.917 4.72727C149.363 4.7706 227.683 5.64805 306.113 5.84848C334.255 5.9204 365.357 5.42798 393.07 6.84848C395.212 6.95825 397.506 6.90909 399.692 6.90909C401.637 6.90909 395.811 6.84291 393.881 6.78788C364.667 5.95477 335.567 4.92008 306.248 4.27273C249.835 3.02712 195.007 4.74526 138.956 6.0303C116.412 6.54715 93.9799 6.84667 71.3224 6.89394C57.8942 6.92195 42.9377 7.28761 29.5668 6.78788C25.8411 6.64863 22.8646 6.12496 19.2968 5.87879C18.0876 5.79535 16.5427 5.80326 19.8373 5.81818C38.8932 5.90451 57.898 6.39417 76.9303 6.60606C136.874 7.2734 197.119 6.90909 257.128 6.90909C294.731 6.90909 331.564 6.05619 369.017 5.48485C378.335 5.3427 387.3 5 396.651 5C398.582 5 399.891 4.72727 402.056 4.72727C403.025 4.72727 403.993 4.72727 404.962 4.72727C412.304 4.72727 390.277 4.69341 382.935 4.66667C309.068 4.39764 236.035 5.56975 162.468 6.89394C130.848 7.46311 99.3991 8 67.6738 8"
              stroke="#EB5D39"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex flex-col lg:flex-row gap-[1px] mt-5 md:mt-10 self-start">
          <AboutCard
            img={
              "https://res.cloudinary.com/dh7z3wkfx/image/upload/v1693076406/Group_49_i0q2ap.png"
            }
            heading={"Our Vision"}
            descriptions={card1Descriptions}
          />
          <AboutCard
            img={
              "https://res.cloudinary.com/dh7z3wkfx/image/upload/v1693076406/Group_50_svbyl1.png"
            }
            heading={"Our Mission"}
            descriptions={card2Descriptions}
          />
          <AboutCard
            img={
              "https://res.cloudinary.com/dh7z3wkfx/image/upload/v1693076406/Group_52_b1fdpx.png"
            }
            heading={"Our Team"}
            descriptions={card3Descriptions}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
