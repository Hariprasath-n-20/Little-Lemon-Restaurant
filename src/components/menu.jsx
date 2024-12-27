import GreekSalad from "../assets/greek-salad.jpg"
import LemonDessert from "../assets/lemon-dessert.jfif"
import Bruchetta from "../assets/bruschetta.jfif"
import Brownie from "../assets/chocolate-brownies.jpg"
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import './menu.css';
const meals = [
    {
      name: "Greek Salad",
      image: GreekSalad,
      price: "$10.00",
      description: `The famous greek salad of crispy lettuce, peppers, olives and
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary
        croutons.`,
    },
    {
      name: "Lemon Dessert",
      image: LemonDessert,
      price: "$8.50",
      description: `This comes straight from grandma's recipe book, every last
        ingredient has been sourced and is as authentic as can be imagined.`,
    },

    {
        name: "Bruschetta",
        image: Bruchetta,
        price: "$6.79",
        description: `Our Bruschetta is made from grilled bread that has been
          smeared with garlic and seasoned with salt and olive oil.`,
      },
      {
        name: "Brownie",
        image: Brownie,
        price: "$5.19",
        description: `A chocolate brownie as a chocolate baked dessert bar 
        including nuts, frosting, chocolate chips, and other tasty ingredients.`,
      },
  ];

export default function Menu() {
    
    
      return (
        <section className="container grid week-specials" id="menu">
          <div className="week-specials-header">
            <h2>This week specials!</h2>
          </div>
            {meals.map((meal, index) => (
                <article className="meal-card">
                    <div className="meal-card-image">
                        <img src={meal.image} alt={meal.name} />
                    </div>
                    <div className="meal-card-header">
                        <h3>{meal.name}</h3>
                        <span>{meal.price}</span>
                    </div>
                    <div className="meal-card-body-footer">
                        <p>{meal.description}</p>
                        <HashLink to="/orderOnline">
                            Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
                        </HashLink>
                    </div>
                </article>
            ))}
        </section>
      );
  }


  