import React from "react";
import Item1 from "./avatar-rounded-with-dropdown.react";
import Item2 from "./avatars-circle-active.react";
import Item3 from "./avatars-circle-image.react";
import Item4 from "./avatars-circle-stacked.react";
import Item5 from "./avatars-circle-text.react";
import Item6 from "./avatars-circle-with-dropdown.react";
import Item7 from "./avatars-rounded-text.react";
import Item8 from "./avatars-rounded-stacked.react";
import Item9 from "./avatars-rounded-image.react";
import Item10 from "./avatars-rounded-active.react";

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
    </div>
  );
};

export default page;
