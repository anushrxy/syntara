import React, { useState } from "react";
import Form from "../components/Seller/Form";
import TicketTable from "../components/Seller/TicketTable"

function Seller() {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <Form />;
      case 2:
        return <TicketTable/>;
      case 3:
        return <p className="text-xl">Coming Soon...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="text-color-primary flex flex-col justify-center items-center gap-5 w-screen min-h-screen py-10">
      <p className="text-3xl md:text-5xl font-bold text-center">
        Unlock the Potential of Your Tickets
      </p>
      <div className="flex gap-4 bg-bg-secondary px-2 sm:px-5 py-1 mt-2">
        <button
          className={`text-lg ${activeTab === 1 ? 'font-semibold' : ''} border-r-2 border-r-color-secondary pr-2 sm:pr-5`}
          onClick={() => setActiveTab(1)}
        >
          List Tickets
        </button>
        <button
          className={`text-lg ${activeTab === 2 ? 'font-semibold' : ''} border-r-2 border-r-color-secondary pr-2 sm:pr-5`}
          onClick={() => setActiveTab(2)}
        >
          View Sales
        </button>
        <button
          className={`text-lg ${activeTab === 3 ? 'font-semibold' : ''} `}
          onClick={() => setActiveTab(3)}
        >
          Verify Tickets
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Seller;
