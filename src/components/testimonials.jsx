import Reviewer1 from "../assets/reviewer1.avif"
import Reviewer2 from "../assets/reviewer2.avif"
import Reviewer3 from "../assets/reviewer3.avif"
import Reviewer4 from "../assets/reviewer4.avif"
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import "./testimonials.css";

const customers = [
  {
    fullName: "Anthony",
    image: Reviewer1,
    rating: [1, 1, 1, 0.5, 0],
    says: "Restaurant was cozy, dessert was the perfect finish to the meal. Can't wait to go back!",
  },
  {
    fullName: "John",
    image: Reviewer2,
    rating: [1, 1, 1, 1, 0],
    says: "The pasta was al dente, the sauce was amazing. Staff were friendly and it was a great visit",
  },
  {
    fullName: "Mary",
    image: Reviewer3,
    rating: [1, 1, 1, 1, 0.5],
    says: "The delicious food, impeccable service, and charming ambiance made for a memorable experience",
  },
  {
    fullName: "Sarah",
    image: Reviewer4,
    rating: [1, 1, 1, 1, 1],
    says: "This one truly stands out, the attention to detail and commitment to guest service set it apart.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <article className="testimonial-card">
          <img src={customer.image} alt={customer.fullName} />
          <h4>{customer.fullName}</h4>
          <span>
            {customer.rating.map((ratingPoint, idx) =>
              ratingPoint === 1 ? (
                <IoMdStar key={idx} />
              ) : ratingPoint === 0.5 ? (
                <IoMdStarHalf key={idx} />
              ) : ratingPoint === 0 ? (
                <IoMdStarOutline key={idx} />
              ) : null
            )}
          </span>
          <blockquote>
            <p>"{customer.says}"</p>
          </blockquote>
        </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;