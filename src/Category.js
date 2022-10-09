import React from "react";

const Category = ({ category, filterData, displayCategory }) => {
  return (
    <div className="head-btn-container">
      <button
        className={
          displayCategory === category ? "clicked-head-btn" : "head-btn"
        }
        onClick={() => {
          filterData(category);
        }}
      >
        {category}
      </button>
    </div>
  );
};

export default Category;
