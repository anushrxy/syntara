import React, { useEffect, useState } from "react";
import BuyCard from "../Cards/BuyCard";
import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";


function Buy() {

  const [directBuyCards, setDirectBuyCards] = useState([]);

  const getContracts = async () => {
    const q = query(collection(db, "contracts"));
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    console.log(data)
    setDirectBuyCards(data);

  };

  useEffect(() => {
    getContracts();
  }, [])

  const peerBuyCards = [
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
            <p className="font-bold text-4xl mb-4 border-b-[3px] border-b-color-secondary inline-block">
              Direct Buy
            </p>
            <div className="flex flex-wrap gap-3">
              {directBuyCards.map((card, index) => (
                <BuyCard
                  key={index}
                  imageUrl={card.image}
                  title={card.name}
                  venue={card.venue}
                  genre={card.genre}
                  price={card.price}
                  contract={card.id}
                  metadata={card.metadata}
                  className=""
                />
              ))}
            </div>
          </div>
          <div className="bg-bg-tertiary p-8 shadow-lg lg:p-12">
            <p className="font-bold text-4xl mb-4 border-b-[3px] border-b-color-secondary inline-block">
              Buy From Peers
            </p>
            <div className="flex flex-wrap gap-3 w-full">
              {peerBuyCards.map((card, index) => (
                  <BuyCard
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
        </div>
      </div>
    </div>
  );
}

export default Buy;
