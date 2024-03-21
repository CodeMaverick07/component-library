import React from "react";
import Item1 from "./button-extra-large.react";
import Item2 from "./button-extra-small.react";
import Item3 from "./button-large.react";
import Item4 from "./button-medium-large.react";
import Item5 from "./button-small.react";
import Item6 from "./button-medium.react";
import Item7 from "./button-regular.react";

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
    </div>
  );
};

export default page;
