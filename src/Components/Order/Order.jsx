import React from 'react';
import './order.css';

const Order = () => {
  return (
    <section className="order-banner">
      <div className="order-content">
        <h2 className="order-title">
          Stay home & get your daily <br /> needs from our shop
        </h2>
        <p className="order-subtitle">
          Start You'r Daily Shopping with <span>Nest Mart</span>
        </p>
        <div className="order-form">
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="email-input" 
            />
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="order-illustration">
        <div className="box-icon">📦</div>
        <div className="fresh-badge">Fresh</div>
      </div>
    </section>
  );
};

export default Order;