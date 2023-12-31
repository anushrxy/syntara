import React from "react";
import { useState } from "react";
import Buy from "../components/Buyer/Buy";
import Resell from "../components/Buyer/Resell";
import Own from "../components/Buyer/Own";

function Buyer() {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <Buy />;
      case 2:
        return <Resell />;
      case 3:
        return <Own />;
      default:
        return null;
    }
  };

  return (
    <div className="text-color-primary flex flex-col justify-center items-center gap-5 min-h-screen py-10 overflow-x-hidden">
      <div className="flex flex-col gap-1 sm:gap-2">
        <p className="text-3xl md:text-5xl font-bold text-center inline">
          Elevate Ticket Experience: Own, Buy & Resell with Ease
        </p>
        <p className="text-base sm:text-lg font-medium text-center text-color-secondary inline">
          Discover the Ultimate Ticket Hub: Possess, Acquire, and Resell Your
          Tickets Conveniently
        </p>
      </div>
      <div className="flex gap-4 bg-bg-secondary px-2 sm:px-5 py-1 mt-2">
        <button
          className={`text-base sm:text-lg ${
            activeTab === 1 ? "font-semibold" : ""
          } border-r-2 border-r-color-secondary pr-2 sm:pr-5`}
          onClick={() => setActiveTab(1)}
        >
          Buy Tickets
        </button>
        <button
          className={`text-base sm:text-lg ${
            activeTab === 2 ? "font-semibold" : ""
          } border-r-2 border-r-color-secondary pr-2 sm:pr-5`}
          onClick={() => setActiveTab(2)}
        >
          Resell Tickets
        </button>
        <button
          className={`text-base sm:text-lg ${
            activeTab === 3 ? "font-semibold" : ""
          } `}
          onClick={() => setActiveTab(3)}
        >
          Owned Tickets
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Buyer;
