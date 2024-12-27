import { Link } from "react-router-dom"
import RestaurantFood from "../assets/restaurant-food.jpg"
import "./contentHeader.css";

export default function ContentHeader() {
  const handleClick = () => {
    const imageUrl = require("../assets/menu.webp");
    window.open(imageUrl, "_blank", "noopener,noreferrer");
  };
    return (
      <div className="hero" id="home">
        <div className="container grid">
            <div className="hero-desc">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                <div className="buttons">
                  <Link to="/booking" ><button className="button-primary">
                      Reserve a table
                  </button></Link>
                  <Link to="/menu"> <button className="button-primary"  onClick={handleClick}>
                      Online Menu
                  </button></Link>
                </div>
                
            </div>
            <img className="hero-img" src={RestaurantFood} alt="hero image"/>
        </div>
      </div>
    )
  }