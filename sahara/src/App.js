
import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Payment from './Payment';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom"
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I6UaCGzo5WLS1I6bK2lOPx9WtNTEQjDD4GUBEhquvwAGZJ8GYISDWxhhkRaq6az0oxeIc8rf4WzNbxUAFWOPFOD000lkp3R4d"
);

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
    
      if (authUser){
        // the user just logged in / the user was logged in 
        dispatch({
          type: "SET_USER",
          user: authUser 
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null 
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
