import React from "react";
import Item1 from "./header-2.react";
import Item2 from "./header-1.react";
import Item3 from "./header-3.react";
import Item4 from "./header-4.react";
import Item5 from "./page-heading.react";
import Item6 from "./simple-with-category-dropdown.react";

const page = () => {
  return (
    <div>
      <div className="text-center font-bold text-xl">1</div>
      <Item1 />
      <div className="text-center font-bold text-xl">2</div>
      <Item2 />
      <div className="text-center font-bold text-xl">3</div>
      <Item3 />
      <div className="text-center font-bold text-xl">4</div>
      <Item4 />
      <div className="text-center font-bold text-xl">5</div>
      <Item5 />
      <div className="text-center font-bold text-xl">6</div>
      <Item6 />
    </div>
  );
};

export default page;
