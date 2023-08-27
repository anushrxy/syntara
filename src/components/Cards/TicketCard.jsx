import React, { useState } from "react";

const TicketCard = ({ imageUrl, title, venue, genre, price, task }) => {
  const [resellPrice, setResellPrice] = useState("");

  return (
    <div className="bg-bg-secondary shadow-bg-tertiary overflow-hidden shadow-md group relative block max-w-[280px]">
      <img
        className="h-[300px] w-full object-cover sm:h-72"
        src={imageUrl}
        alt="Event"
      />
      <div className="p-4 text-color-primary text-center">
        <div className="relative pt-1 pb-3 px-3">
          <h3 className="mt-1 text-3xl text-color-primary font-bold">
            {title}
          </h3>
          <p className="mt-1.5 text-lg text-color-secondary">{`Venue: ${venue}`}</p>
          <p className="mt-0 text-md text-color-secondary">{`( ${genre} )`}</p>
          <p className="mt-1 font-semibold text-2xl text-color-primary">{`${price} ETH`}</p>

          {task === "buy" && (
            <div className="flex items-center justify-center">
              <button className="mt-4 mx-1 block w-[50%] py-2 text-sm font-medium text-color-primary transition bg-bg-tertiary">
                Buy Ticket
              </button>
            </div>
          )}

          {task === "list" && (
            <div className="flex">
              <input
                placeholder="Resell Price..."
                className="text-color-primary w-[90%] mt-4 p-2 bg-gray-900 focus:outline-none"
                value={resellPrice}
                onChange={(event) => {
                  setResellPrice(event.target.value);
                }}
              />
              <button className="w-20 p-2 mt-4 ml-[1px] bg-bg-tertiary text-white hover:text-white">
                List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
