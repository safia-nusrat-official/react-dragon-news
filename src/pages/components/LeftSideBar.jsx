import React, { useEffect, useState } from "react";

export const LeftSideBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch("/public/data/categories.json")
    .then(response=>response.json())
    .then(data=>setCategories(data))
  }, [])

  return (
    <div>
      <span
        className="font-semibold text-gray-800 text-xl
    "
      >
        All Caterogy
      </span>
      <ul className="rounded-sm mt-4">
        {categories.map((category) => (
          <li key={category.id}
          className="font-semibold text-lg hover:text-gray-800 hover:bg-gray-200 p-4 pl-8 rounded-md text-gray-400">{category.name}</li>
        ))}
      </ul>
    </div>
  );
};
