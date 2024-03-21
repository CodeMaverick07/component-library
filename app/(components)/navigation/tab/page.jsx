import React from "react";
import Item1 from "./4-tabs-with-counter.react";
import Item2 from "./active-indigo.react";
import Item3 from "./gray-bg-active-white.react";
import Item4 from "./indigo-block-gray-bg.react";
import Item5 from "./tab-2.react";
import Item6 from "./tab-3.react";
import Item7 from "./tab-with-icons.react";
import Item8 from "./tab.react";
import Item9 from "./white-bg-active-gray.react";

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
