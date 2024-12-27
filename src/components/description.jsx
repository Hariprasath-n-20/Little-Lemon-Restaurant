import ContentMedia1 from "../assets/content-media1.jpg"
import ContentMedia2 from "../assets/content-media2.jpg"
import "./description.css";

export default function Description() {
  return(
  <section className="container grid our-story" id="about">
    <div className="our-story-description">
      <h2>Our Story</h2>
      <p>One of America's most beloved restaurants, Little Lemon has welcomed guests to enjoy its 
        contemporary American cuisine, warm hospitality, and unparalleled service in Chicago City for 
        over two decades. An austere experience, where richness is lived through the purity of ingredients,
        the combination of extraordinary flavors, and the story of their origin.<br></br>
        Chef Michael Anthony's ever-evolving seasonal menu showcases the restaurant's 
        relationships with local farms and purveyors. Opened in 1994 by restaurateur Danny Meyer in a 
        historic landmark building just north of Union Square, the restaurant has earned 
        nine James Beard Awards, including "Outstanding Restaurant" and "Outstanding Chef in America.”</p>
    </div>
    <div className="our-story-chefs">
      <img src={ContentMedia1} alt="Restaurant" />
      <img src={ContentMedia2} alt="Check cooking" />
    </div>
  </section>
  )}