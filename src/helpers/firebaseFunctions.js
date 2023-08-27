import { setDoc, doc, collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const buyTicket = async (ticket) => {};

export const addContract = async (
  contractAddress,
  name,
  imgUrl,
  price,
  remaining,
  sold,
  venue,
  genre
) => {
  await setDoc(doc(db, "contracts", contractAddress), {
    name: name,
    imgUrl: imgUrl,
    price: price,
    remaining: remaining,
    sold: sold || 0,
    venue: venue,
    genre: genre,
  });
  console.log("Document written with ID: ", contractAddress);
};

export const getContracts = async () => {
  const q = query(collection(db, "contracts"));
  const data = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  console.log(data)
};

export const updateToken = async (buyerAddress, contractAddress, tokenArray) => {
    const docRef = db.collection('buyers').doc(buyerAddress);
    await setDoc(docRef, {
       "${contractAddress}": tokenArray
    });
}