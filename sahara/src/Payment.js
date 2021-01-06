import React, { useState } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe(null);
    const elements = useElements(true);

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError((event.error ? event.error.message : ""))
    }

    return (
      <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>
          <div className="payment_section">
            <div className='payment_title'>
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="payment_section">
              <div className='payment_title'>
                  <h3>Review Items and Delivery</h3>
              </div>
              <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
              </div>
          </div>
          <div className="payment_section">
              <div className="payment_title">
                  <h3>Payment Method</h3>
              </div>
              <div className="payment_details"> 
                    <form>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">
                                <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} 
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                        </div>
                    </form>
              </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
