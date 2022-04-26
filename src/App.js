import "./App.css";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Beats from "./pages/Beats";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Custom from "./pages/Custom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebaseApp";
import { useStateValue } from "./StateProvider";


function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is : ", authUser);

      if (authUser) {
        //volt user vagy most logolt.

        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route
            path="/home"
            exact
            element={
              <>
                <Nav />
                <Home2 />
              </>
            }
          />

          <Route
            path="/beats"
            element={
              <>
                <Nav />
                <Beats />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Nav />
                <Services />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Nav />
                <Contact />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Nav />
                <Login />
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                <Nav />
                <Signup />
              </>
            }
          />

          <Route
            path="/custom"
            element={
              <>
                <Nav />
                <Custom />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
