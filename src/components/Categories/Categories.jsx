import React from "react";

function Categories({
  value,
  onChangeCategory,
  open,
  setOpen,
  activeIndex,
  setActiveIndex,
}) {
  const categories = [
    "All items",
    "Sweatshirts",
    "Jackets",
    "Vests",
    "Hats",
    "Pants",
    "Sneakers",
    "Accessory",
  ];


  return (
    <div className="categories" onClick={() => setOpen(!open)}>
      <button className="popupCat">Categories</button>
      <ul>
        {open &&
          categories.map((categoryName, i) => (
            <li
              key={i}
              className={value === i ? "active" : ""}
              onClick={() => onChangeCategory(i)}
            >
              {categoryName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
