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

function Services() {
  const [MyData, setMyData] = useState([]);

  useEffect(() => {
    const CollectionRef = collection(db, "Services");
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
        <h1>Services</h1>

        <table className="servicetable">
          {MyData.map((obj) => (
            <tr className="" key={obj.id}>
              <div className="parent">
                
                <img id="servicepictures" src={obj.URL}></img>

               <td className="parentthing"> {obj.Name}</td>

               <td > {obj.Price}</td>

              
           
                <button className="btn-primary" id="service cart">Add to cart</button>
              </div>
            </tr>
          ))}
        </table>

        <footer>
          <p>
            Created by <i className="fa fa-heart"></i>
            <a target="_blank" href="https://www.instagram.com/sss_stex/">
             STEXBEATS{" "}
            </a>
            ,2022
          </p>
        </footer>

        
      </div>
    </div>
  );
}

export default Services;
