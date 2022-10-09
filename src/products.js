import React from "react";

const Products = ({
  product,
  id,
  desc,
  price,
  setDescriptionId,
  descriptionId,
}) => {
  return (
    <article
      className={descriptionId === id ? "product-onclick" : "product"}
      key={id}
    >
      <div className="dot">
        <div className="outer-button">
          <button
            className={descriptionId === id ? "check-press" : "check"}
            onClick={() => {
              setDescriptionId(id);
            }}
          ></button>
        </div>
        <div className="product-content">
          <div className="product-title">
            <h4>{product}</h4>
            <p className="price">${price}.00</p>
          </div>
        </div>
      </div>

      <p className="desc">{descriptionId === id && desc}</p>
    </article>
  );
};

export default Products;
