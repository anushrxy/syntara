import React from "react";
import ReBuy from "../Cards/ReBuy";

function Resell() {
  const listedCards = [
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 1",
      venue: "Venue 1",
      genre: "Genre 1",
      price: "3",
    },
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 2",
      venue: "Venue 2",
      genre: "Genre 2",
      price: "3",
    },
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 3",
      venue: "Venue 3",
      genre: "Genre 3",
      price: "3",
    },
  ];

  const unlistedCards = [
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 1",
      venue: "Venue 1",
      genre: "Genre 1",
      price: "3",
    },
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 2",
      venue: "Venue 2",
      genre: "Genre 2",
      price: "3",
    },
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 3",
      venue: "Venue 3",
      genre: "Genre 3",
      price: "3",
    },
    {
      imageUrl: "https://picsum.photos/200",
      title: "Card Title 4",
      venue: "Venue 4",
      genre: "Genre 4",
      price: "3",
    },
  ];

  return (
    <div className="mx-auto w-screen">
      <div className="mx-auto max-w-screen-lg px-4 pt-2 pb-16 sm:px-6 lg:px-8">
        <div className="">
          <div className="bg-bg-tertiary p-8 shadow-lg lg:p-12">
            <p className="font-bold text-2xl sm:text-4xl mb-4 border-b-[3px] border-b-color-secondary inline-block">
              Listed For Resell
            </p>
            <div className="flex flex-wrap gap-3">
              {listedCards.map((card, index) => (
                <ReBuy
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  venue={card.venue}
                  genre={card.genre}
                  price={card.price}
                  className=""
                />
              ))}
            </div>
          </div>
          <div className="bg-bg-tertiary p-8 shadow-lg lg:p-12">
            <p className="font-bold text-2xl sm:text-4xl mb-4 border-b-[3px] border-b-color-secondary inline-block">
              Unlisted Holding
            </p>
            <div className="flex flex-wrap gap-3 w-full">
              {unlistedCards.map((card, index) => (
                <ReBuy
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  venue={card.venue}
                  genre={card.genre}
                  price={card.price}
                  task="list"
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resell;
