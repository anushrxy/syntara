import React from "react";

const TicketTable = () => {
  const events = [
    {
      name: "ICC Worldcup",
      ticketsSold: 5,
      ticketsLeft: 75,
      amountEarned: "0.02 ETH",
    },
    // {
    //   name: "Event 2",
    //   ticketsSold: 75,
    //   ticketsLeft: 25,
    //   amountEarned: "$1500",
    // },
    // {
    //   name: "Event 3",
    //   ticketsSold: 50,
    //   ticketsLeft: 10,
    //   amountEarned: "$1007",
    // },
    // {
    //   name: "Event 4",
    //   ticketsSold: 50,
    //   ticketsLeft: 10,
    //   amountEarned: "$1000",
    // },
  ];
  const totalAmountEarned = events.reduce(
    (total, event) => total + parseFloat(event.amountEarned.replace("", "ETH")),
    0
  );

  return (
    <div className="mx-auto w-screen sm:w-[70%]">
      <div className="mx-auto max-w-screen px-4 pt-2 pb-16 sm:px-6 lg:px-8">
        <div className="inline-block w-full overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-bg-tertiary">
                <th className="border border-color-primary px-4 py-2">Event Name</th>
                <th className="border border-color-primary px-4 py-2">Tickets Sold</th>
                <th className="border border-color-primary px-4 py-2">Tickets Left</th>
                <th className="border border-color-primary px-4 py-2">Amount Earned</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className={"bg-bg-secondary"}>
                  <td className="border border-color-primary px-4 py-2">
                    {event.name}
                  </td>
                  <td className="border border-color-primary px-4 py-2">
                    {event.ticketsSold}
                  </td>
                  <td className="border border-color-primary px-4 py-2">
                    {event.ticketsLeft}
                  </td>
                  <td className="border border-color-primary px-4 py-2">
                    {event.amountEarned}
                  </td>
                </tr>
              ))}
              <tr className="bg-bg-tertiary">
                <td className="border border-color-primary px-4 py-2 font-semibold" colSpan="3">
                  Total Amount Earned:
                </td>
                <td className="border border-color-primary px-4 py-2 font-semibold">
                  {/* ${totalAmountEarned.toFixed(2)} */}
                  {'0.02 ETH'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketTable;
