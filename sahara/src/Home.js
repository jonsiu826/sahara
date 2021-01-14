import React from 'react';
import "./Home.css";
import Product from './Product';
import Carousel from "react-elastic-carousel";

function Home() {

  const photos = [
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NTM1Y2E3OTYt-w1500._CB411425260_.jpg",
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OTgzNWJkZmYt-w1500._CB412095319_.jpg",
    },

    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/audible/A4-1000_UseCase_Gateway_Desktop_1500x600_EN._CB406069717_.jpg",
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/G/01/test/gp/s/e/v/e/n/t/s/m/a/n/a/g/e/r/HP_DesktopHero_VDay_MascGift_1500x600-US-en._CB413287176_.jpg",
    }
  ];

   const breakPoints = [
     { width: 400, itemsToShow: 1 },
   ];
    return (
      <div className="home">
        <div className="home_container">
          <Carousel className="home_image" breakPoints={breakPoints}>
            {photos.map((photo, idx) => {
              return (
                <div>
                  <img className="carousel-shoe-photo" src={photo.url} />
                  <p className="carousel-shoe-name">{photo.name}</p>
                </div>
              );
            })}
          </Carousel>

          <div className="home_row">
            <Product
              id="1237"
              title="Samsung QLED Monitor Curved"
              price={649.0}
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
              price={999.0}
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
