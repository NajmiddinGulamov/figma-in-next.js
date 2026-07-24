import React from 'react';
import './meals.css';

const Meals = () => {
  return (
    <section className="meals-container">
      <div className="meals-column">
        <h3 className="column-title">Top Selling</h3>
        <div className="title-underline"></div>
        <div className="meals-list">
          <div className="meal-item">
            <img src="./01.jpg" alt="Carrots" className="meal-img" />
            <div className="meal-details">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./02.jpg" alt="Peppers" className="meal-img" />
            <div className="meal-details">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./03.jpg" alt="Juice" className="meal-img" />
            <div className="meal-details">
              <h4>Nestle Original Coffee-Mate Coffee Creamer</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="meals-column">
        <h3 className="column-title">Trending Products</h3>
        <div className="title-underline"></div>
        <div className="meals-list">
          <div className="meal-item">
            <img src="./04.jpg" alt="Bananas" className="meal-img" />
            <div className="meal-details">
              <h4>Organic Cage-Free Grade A Large Brown Eggs</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./01.jpg" alt="Watermelon" className="meal-img" />
            <div className="meal-details">
              <h4>Seeds of Change Organic Quinoa, Brown, & Red Rice</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./02.jpg" alt="Durian" className="meal-img" />
            <div className="meal-details">
              <h4>Naturally Flavored Cinnamon Vanilla Light Roast Coffee</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="meals-column">
        <h3 className="column-title">Recently added</h3>
        <div className="title-underline"></div>
        <div className="meals-list">
          <div className="meal-item">
            <img src="./03.jpg" alt="Mangoes" className="meal-img" />
            <div className="meal-details">
              <h4>Pepperidge Farm Farmhouse Hearty White Bread</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./04.jpg" alt="Berry Blend" className="meal-img" />
            <div className="meal-details">
              <h4>Organic Frozen Triple Berry Blend</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./01.jpg" alt="Corn" className="meal-img" />
            <div className="meal-details">
              <h4>Oroweat Country Buttermilk Bread</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="meals-column">
        <h3 className="column-title">Top Rated</h3>
        <div className="title-underline"></div>
        <div className="meals-list">
          <div className="meal-item">
            <img src="./02.jpg" alt="Pomegranate" className="meal-img" />
            <div className="meal-details">
              <h4>Foster Farms Takeout Crispy Classic Buffalo Wings</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./03.jpg" alt="Avocado" className="meal-img" />
            <div className="meal-details">
              <h4>Angie's Boomchickapop Sweet & Salty Kettle Corn</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>

          <div className="meal-item">
            <img src="./04.jpg" alt="Oranges" className="meal-img" />
            <div className="meal-details">
              <h4>All Natural Italian-Style Chicken Meatballs</h4>
              <div className="rating">★ <span>(4.0)</span></div>
              <div className="prices">
                <span className="current-price">$32.85</span>
                <span className="old-price">$33.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meals;