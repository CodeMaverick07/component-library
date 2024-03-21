import React from "react";
import Item1 from "./light-with-header-and-icons.react";
import Item2 from "./light-with-header-and-indicator.react";
import Item3 from "./light-with-icons-at-bottom-alternate-style.react";
import Item4 from "./light-with-icons-at-bottom.react";
import Item5 from "./sidebar-1.react";
import Item6 from "./sidebar.react";

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
