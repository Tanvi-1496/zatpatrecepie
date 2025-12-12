import React from "react";
import "../../styles/AboutUs/index.css";

const AboutUs = () => {
  return (
    <div className="aboutus_container">
      {/* HERO HEADER */}
      <section className="hero_section">
        <h1>Zatpatrecepie</h1>
        <p>“Healthy. Tasty. Trusted by Millions.”</p>
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
            <button>Visit YouTube</button>
            <button>Follow Instagram</button>
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
      <section className="footer_cta">
        <h2>Follow Us For Daily Food Inspiration</h2>
        <div className="footer_buttons">
          <button>Instagram</button>
          <button>YouTube</button>
          <button>Facebook</button>
          <button>Email Newsletter</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
