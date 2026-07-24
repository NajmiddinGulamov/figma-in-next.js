import React from 'react';
import './deals.css';

const Deals = () => {
  return (
    <section className="deals-section">
      <div className="deals-header">
        <h2>Deals Of The Day</h2>
        <a href="#all-deals" className="all-deals-link">All Deals &gt;</a>
      </div>

      <div className="deals-grid">
        <div className="deal-card">
          <div className="deal-image-wrapper">
            <img src="./01.jpg" alt="Organic Quinoa" className="deal-image" />
          </div>
          <div className="deal-info">
            <h3 className="deal-title">Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>
            <div className="deal-rating">
              <span className="star">★</span>
              <span className="rating-num">(4.0)</span>
            </div>
            <p className="deal-brand">By <span>NestFood</span></p>
            <div className="deal-bottom">
              <div className="deal-prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
              <button className="add-btn">🛒 Add</button>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-image-wrapper">
            <img src="./02.jpg" alt="Gluten Free" className="deal-image" />
          </div>
          <div className="deal-info">
            <h3 className="deal-title">Perdue Simply Smart Organics Gluten Free</h3>
            <div className="deal-rating">
              <span className="star">★</span>
              <span className="rating-num">(4.0)</span>
            </div>
            <p className="deal-brand">By <span>Old El Paso</span></p>
            <div className="deal-bottom">
              <div className="deal-prices">
                <span className="current-price">$24.85</span>
                <span className="old-price">$26.8</span>
              </div>
              <button className="add-btn">🛒 Add</button>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-image-wrapper">
            <img src="./03.jpg" alt="Mushroom" className="deal-image" />
          </div>
          <div className="deal-info">
            <h3 className="deal-title">Signature Wood-Fired Mushroom and Caramelized</h3>
            <div className="deal-rating">
              <span className="star">★</span>
              <span className="rating-num">(3.0)</span>
            </div>
            <p className="deal-brand">By <span>Progresso</span></p>
            <div className="deal-bottom">
              <div className="deal-prices">
                <span className="current-price">$12.85</span>
                <span className="old-price">$13.8</span>
              </div>
              <button className="add-btn">🛒 Add</button>
            </div>
          </div>
        </div>

        <div className="deal-card">
          <div className="deal-image-wrapper">
            <img src="./04.jpg" alt="Lemonade" className="deal-image" />
          </div>
          <div className="deal-info">
            <h3 className="deal-title">Simply Lemonade with Raspberry Juice</h3>
            <div className="deal-rating">
              <span className="star">★</span>
              <span className="rating-num">(3.0)</span>
            </div>
            <p className="deal-brand">By <span>Yoplait</span></p>
            <div className="deal-bottom">
              <div className="deal-prices">
                <span className="current-price">$15.85</span>
                <span className="old-price">$16.8</span>
              </div>
              <button className="add-btn">🛒 Add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;