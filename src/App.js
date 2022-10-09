import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaDotCircle } from "react-icons/fa";
import data from "./data";
import Products from "./products";
import Category from "./Category";

const allCategory = [
  "All",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [displayCategory, setDisplayCategory] = useState("All");
  const [products, setProduct] = useState(data);
  const [descriptionId, setDescriptionId] = useState(products[0].id);

  useEffect(() => {
    setDescriptionId(products[0].id);
  }, [setDescriptionId, products]);

  const filterData = (category) => {
    if (category === "All") {
      setDisplayCategory("All");
      setProduct(data);
      return;
    }

    const newData = data.filter((item) => item.category === category);
    setDisplayCategory(category);
    setProduct(newData);
  };

  return (
    <main>
      <section>
        <div className="head">
          <h2>Buy this image</h2>
          <div className="category">
            {allCategory.map((category) => {
              return (
                <Category
                  category={category}
                  filterData={filterData}
                  displayCategory={displayCategory}
                />
              );
            })}
          </div>
        </div>
        <div className="content">
          {/* {article for products} */}
          <div className="all-products">
            {products.map((item) => {
              return (
                <Products
                  {...item}
                  descriptionId={descriptionId}
                  setDescriptionId={setDescriptionId}
                />
              );
            })}
          </div>
          <button className="buy-btn">Buy now</button>
          <button className="add-btn">Add to cart</button>
        </div>
      </section>
    </main>
  );
}

export default App;
