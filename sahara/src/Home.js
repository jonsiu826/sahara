import React from 'react';
import "./Home.css";
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home_row">
            <Product
              id="1237"
              title="Samsung QLED Monitor Curved"
              price={649.00}
              image="/samsung_monitor.jpg"
              rating={4}
            />

            <Product
              id="1235"
              title="Green Ranger Funko Pop"
              price={11.99}
              image="/green_ranger.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="1236"
              title="Apple iPad Pro (12.9-inch, Wi-Fi + Celluler, 256GV)"
              price={999.00}
              image="/ipad.jpeg"
              rating={4}
            />
            <Product
              id="1234"
              title="Harry Potter and the Sorcerer's Stone"
              price={29.99}
              image="/harry_potter.jpg"
              rating={4}
            />

            <Product
              id="1238"
              title="Wilson Evolution Game Basketball"
              price={64.99}
              image="/basketball.jpeg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="1239"
              title="All-Clad Brushed D5 Stainless Cookware Set"
              price={949.95}
              image="/all_clad.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
