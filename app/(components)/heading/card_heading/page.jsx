import React from "react";
import Item1 from "./grey-tabs-on-right.react";
import Item2 from "./indigo-tabs-on-right.react";
import Item3 from "./right-aligned-toggle.react";
import Item4 from "./sub-text-with-button.react";
import Item5 from "./tabs-on-bottom.react";
import Item6 from "./with-avatar-and-buttons.react";

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
