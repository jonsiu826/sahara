import React from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
      <div className="payment">
        <div className="payment_container">
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

          </div>
        </div>
      </div>
    );
}

export default Payment
