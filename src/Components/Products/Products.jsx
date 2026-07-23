import "./Products.css";

import { products } from "@/data/data";
import { CiStar } from "react-icons/ci";

function Products() {
  return (
    <div className="products container">
      <div className="products__info">
        <div className="products__info--title">Popular Products</div>

        <div className="products__info--links">
          <a href="">All</a>
          <a href="">Milks & Dairies</a>
          <a href="">Pet Foods </a>
          <a href="">Meats</a>
          <a href="">Vegetables</a>
          <a href="">Fruits</a>
        </div>
      </div>

      <div className="products__cards">
        {products.map((item) => {
          return (
            <div className="products__card" key={item.id}>
              <img className="products__img" src={item.image} alt="P" />
              <b className="products__category">{item.category}</b>
              <h2 className="products__title">{item.title}</h2>
              <p className="products__rating">
                <span>
                  <CiStar className="icons" />
                </span>
                <span>({item.rating})</span>
              </p>
              <p className="products__brand">{item.brand}</p>
              <div className="products__btn">
                <p>$ {item.price}</p>
                <button>Add</button>
              </div>
              <button className="products__badge">{item.badge}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
