
import React from "react";
import ReactDOM from "react-dom/client";
const restaurantList = require("./RestaurantCardList");

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, costForTwo, deliveryTime }) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3 className="card-tags">{cuisines.join(", ")}</h3>
      <h3 className="card-rating">{avgRating} stars</h3>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );

};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l16InbAEMbfIr50iecPtVL0Ik7T99O8VEkkczG6OLg&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {restaurantList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      Created By
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/rhythm-shukla-938090174/"
        role="button"
        data-mdb-ripple-color="dark"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      {new Date().getFullYear()}
      <strong>
        Indian<span>Food</span>
      </strong>
    </div>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);