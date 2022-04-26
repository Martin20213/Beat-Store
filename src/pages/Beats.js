import "../App.css";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseApp";

import cart from "../cart.png";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  CollectionReference,
} from "firebase/firestore";
import ReactAudioPlayer from "react-audio-player";
import { SearchBar } from "../components/SearchBar";
function Beats() {

  const [MyData, setMyData] = useState([]);

  useEffect(() => {
    const CollectionRef = collection(db, "Beats");
    const q = query(CollectionRef, orderBy("Name"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()));
      setMyData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      return unsubscribe;
    });
  }, []);

  

  return (
    <div className="App">
      <div className="bg">
        <h1>Beats</h1>

        <SearchBar MyData={MyData} setMyData={setMyData}/>      


        <table className="beattable">
          <tr>
            <th>Title</th>
            <th>Audio</th>
            <th>Category</th>
            <th>Time</th>
            <th>BPM</th>
            <th>Price</th>
          </tr>
          {MyData.map((obj) => (
            <tr key={obj.id}>
              <td id="name">{obj.Name}</td>

              <td id="ReactAudioPlayer">
                <ReactAudioPlayer controls src={obj.Audio} />
              </td>

              <td>{obj.Categories}</td>

              <td>{obj.Time}</td>

              <td>{obj.BPM}</td>

              <td>{obj.Price}</td>

              <td>
                <button>
                  <img className="cart" src={cart} alt="cart"></img>
                </button>
              </td>
            </tr>
          ))}
        </table>

        <footer>
          <p>
            Created by <i className="fa fa-heart"></i>
            <a target="_blank" href="https://www.instagram.com/sss_stex/">
              STEXBEATS{" "}
            </a>,2022
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Beats;
