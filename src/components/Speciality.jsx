import React from "react";
import SpecialityCard from "./Cards/SpecialityCard";

function Speciality() {
  return (
    <div className="py-10 px-4 flex flex-col items-center justify-start max-w-[90%] mx-auto">
      <div className="md:self-start ">
        <p className="text-4xl md:text-7xl font-bold ">Our Speciality</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="10"
          viewBox="0 0 649 10"
          fill="none"
          className="min-w-[60%] max-w-[70%] md:max-w-[100%]"
        >
          <path
            d="M2 2.27273C48.207 2.27273 94.414 2.27273 140.621 2.27273C169.029 2.27273 197.227 2.71056 225.592 2.80303C256.844 2.90491 288.008 2.57701 319.252 2.54545C367.299 2.49693 415.098 2 463.228 2C520.163 2 577.073 2.27273 633.978 2.27273C703.672 2.27273 494.483 2.20112 424.935 2.87879C329.323 3.81044 233.462 5 137.59 5C104.248 5 70.9063 5 37.5646 5C36.855 5 28.49 5.13579 27.7641 4.86364C27.217 4.65854 30.6361 4.74801 32.1086 4.74242C56.3803 4.65028 80.7906 4.71831 105.056 4.72727C222.362 4.7706 339.479 5.64805 456.762 5.84848C498.845 5.9204 545.353 5.42798 586.795 6.84848C589.997 6.95825 593.429 6.90909 596.696 6.90909C599.605 6.90909 590.893 6.84291 588.007 6.78788C544.321 5.95477 500.806 4.92008 456.964 4.27273C372.605 3.02712 290.616 4.74526 206.799 6.0303C173.088 6.54715 139.544 6.84667 105.663 6.89394C85.5826 6.92195 63.217 7.28761 43.2226 6.78788C37.6512 6.64863 33.2003 6.12496 27.8651 5.87879C26.057 5.79535 23.7467 5.80326 28.6734 5.81818C57.1691 5.90451 85.5881 6.39417 114.049 6.60606C203.686 7.2734 293.775 6.90909 383.511 6.90909C439.742 6.90909 494.82 6.05619 550.826 5.48485C564.76 5.3427 578.167 5 592.15 5C595.037 5 596.994 4.72727 600.232 4.72727C601.681 4.72727 603.129 4.72727 604.577 4.72727C615.557 4.72727 582.618 4.69341 571.639 4.66667C461.18 4.39764 351.969 5.56975 241.96 6.89394C194.675 7.46311 147.648 8 100.207 8"
            stroke="#EB5D39"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className=" self-start flex flex-col w-full gap-10 sm:gap-5 justify-around md:items-start mt-5 md:mt-10 h-fit max-w-[1600px] ">
        <SpecialityCard title={"Buy Tickets"} className="">Our app allows users to quickly and securely purchase event tickets using a range of payment options. Users can easily browse through upcoming events, select the tickets they want, and receive them as NFTs that can be stored in their digital wallet. This makes it easy to manage your tickets and never worry about losing or misplacing them.</SpecialityCard>
        <SpecialityCard style={"md:self-center"} title={"List Tickets"}>Users can also use our app to sell their tickets on our marketplace. Our platform allows for transparent and secure transactions between buyers and sellers, ensuring that both parties are protected. When selling tickets, users can set their own price and list their tickets for sale in just a few clicks.</SpecialityCard>
        <SpecialityCard style={"md:self-end"} title={"Trade Tickets"}>Our app also offers a unique feature that allows users to trade their event tickets with others. This feature is perfect for users who have a change of plans and can no longer attend an event. Instead of selling their tickets, they can offer them up for trade and find someone who is willing to swap tickets for another event.</SpecialityCard>
      </div>
    </div>
  );
}

export default Speciality;
