import React from "react";
import Item1 from "./10-x-2-col-grid.react";
import Item2 from "./12-col-grid.react";
import Item3 from "./2-x-10-col-grid.react";
import Item4 from "./3-x-3-x-3-x-3-col-grid.react";
import Item5 from "./3-x-9-col-grid.react";
import Item6 from "./4-x-4-x-4-col-grid.react";
import Item7 from "./5-x-7-col-grid.react";
import Item8 from "./6-x-6-col-grid.react";
import Item9 from "./7-x-5-col-grid.react";
import Item10 from "./8-x-4-col-grid.react";
import Item11 from "./9-x-3-col-grid.react";

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
      <div className="text-center font-bold text-xl">10</div>
      <Item10 />
      <div className="text-center font-bold text-xl">11</div>
      <Item11 />
    </div>
  );
};

export default page;
