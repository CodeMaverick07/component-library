import React from "react";
import Item1 from "./popover-with-data-and-buttons.react";
import Item2 from "./popover-with-data.react";
import Item3 from "./popover-with-list-and-actions.react";
import Item4 from "./popover-with-scrolling-avatar-and-list.react";
import Item5 from "./popover1.react";
import Item6 from "./popover2.react";
import Item7 from "./popover3.react";
import Item8 from "./simple-popover.react";
import Item9 from "./text-only-definition.react";

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
      <div className="text-center font-bold text-xl">7</div>
      <Item7 />
      <div className="text-center font-bold text-xl">8</div>
      <Item8 />
      <div className="text-center font-bold text-xl">9</div>
      <Item9 />
    </div>
  );
};

export default page;
