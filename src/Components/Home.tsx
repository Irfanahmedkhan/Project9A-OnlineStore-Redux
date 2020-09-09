import React from "react";
import "./Home.css";
import HomeItem from "../Store/State_Home";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <Link to="/JacketsShop">
        <div className="jacket">
          <img src={HomeItem[0]?.images} alt='' id="img" />
          <h2>Jackets</h2>
        </div>
      </Link>

      <Link to="/Products">
        <div className="shoes">
          <img src={HomeItem[2]?.images} alt='' id="img" />
          <h2>Shoes</h2>
        </div>
      </Link>
    </div>
  );
}

export default Home;
