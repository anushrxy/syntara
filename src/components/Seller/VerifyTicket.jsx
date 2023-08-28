import React from "react";

function VerifyTicket() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-[90%] sm:w-[50%] text-center bg-bg-secondary p-10">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-4"
      >
        <div>
          <label className="sr-only" htmlFor="event-name">
            Contract Address
          </label>
          <input
            className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
            placeholder="Contract Address"
            type="contract-address"
            id="contract-address"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="sr-only" htmlFor="venue">
              Token Id
            </label>
            <input
              className="w-full p-3 text-sm bg-transparent focus:outline-none border-b-[1px] border-color-secondary"
              placeholder="Token id"
              type="token-id"
              id="token-id"
            />
          </div>
        </div>
      </form>
      <button className="inline-block w-full bg-color-secondary px-5 py-3 font-medium text-white sm:w-auto">
        Verify & Burn
      </button>
    </div>
  );
}

export default VerifyTicket;
