import React from "react";
import "../../styles/AboutUs/index.css";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const AboutUs = ({ setCartOpen, cartProducts }) => {
  return (
    <div className="aboutus_container">
      <Nav setCartOpen={setCartOpen} cartProducts={cartProducts} />
      <section className="hero_section">
        <div className="hero_blob">
          <h1>Zatpatrecepie</h1>
          <p>“Healthy. Tasty. Trusted by Millions.”</p>
        </div>
        {/* VERY DEEP S-Curve */}
        <svg
          className="hero_s_curve"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C360,600 1080,-200 1440,240 L1440,400 L0,400 Z"
            fill="#fffdf8"
          />
        </svg>
      </section>

      {/* TWO-COLUMN FEATURE SECTION */}
      <section className="features_section">
        <div className="feature_left">
          <h2>How We Started</h2>
          <div className="feature_image placeholder">Image Placeholder</div>
          <p>
            We began in a small kitchen with a passion for flavors and quality.
            Our journey started with simple recipes and grew into a community of
            food lovers.
          </p>
          <p>
            Every dish is crafted with care, ensuring that every bite brings joy
            to your table.
          </p>
        </div>
        <div className="feature_right">
          <h2>Social Stats</h2>
          <div className="stat_card">
            YouTube Subscribers
            <br />
            <span>1M+</span>
          </div>
          <div className="stat_card">
            Instagram Followers
            <br />
            <span>200K+</span>
          </div>
          <div className="stat_card">
            Total Recipe Views
            <br />
            <span>50M+</span>
          </div>
          <div className="social_buttons">
            <a
              href="https://www.youtube.com/@zatpatrecipesA1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Visit YouTube</button>
            </a>
            <a
              href="https://www.instagram.com/zatpatrecipesa1?igsh=NTlkdHNqMHFudzVw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Follow Instagram</button>
            </a>
          </div>
        </div>
      </section>

      {/* MOST LOVED RECIPES */}
      <section className="recipes_section">
        <h2>Most Loved Recipes</h2>
        <div className="recipes_grid">
          {[...Array(6)].map((_, i) => (
            <div className="recipe_card placeholder" key={i}>
              Image Placeholder
            </div>
          ))}
        </div>
      </section>

      {/* FAMOUS REVIEWS */}
      <section className="reviews_section">
        <h2>Famous Reviews</h2>
        <div className="reviews_grid">
          {[...Array(3)].map((_, i) => (
            <div className="review_card placeholder" key={i}>
              Image Placeholder
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY FEEDBACK */}
      <section className="feedback_section">
        <h2>Community Feedback Wall</h2>
        <div className="feedback_cards">
          <div className="feedback_card">
            "The recipes are so easy and flavourful…"
          </div>
          <div className="feedback_card">
            "Your YouTube shorts helped me cook after college!"
          </div>
          <div className="feedback_card">
            "My family LOVED your paneer tikka recipe!"
          </div>
        </div>
        <div className="feedback_form">
          <input type="text" placeholder="Add Your Feedback" />
          <button>Submit</button>
        </div>
      </section>

      {/* FOOTER CTA */}
      <Footer />
    </div>
  );
};

export default AboutUs;
