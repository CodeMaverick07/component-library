import React from "react";
import Item1 from "./black-left-aligned-with-icons.react";
import Item2 from "./black-left-aligned-with-search-bar-and-icon.react";
import Item3 from "./black-simple-with-icons.react";
import Item4 from "./dark-centre-aligned-with-search-icon-and-avatar.react";
import Item5 from "./dark-with-nav-flushed-left.react";
import Item6 from "./horizontal-navigation-1.react";
import Item7 from "./horizontal-navigation.react";
import Item8 from "./left-aligned-with-icons.react";
import Item9 from "./light-with-nav-flushed-left.react";
import Item10 from "./left-aligned-with-search-bar-and-icon.react";
import Item11 from "./light-centre-aligned-with-search-icon-and-avatar.react";
import Item12 from "./light-with-button.react";

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
      <div className="text-center font-bold text-xl">12</div>
      <Item12 />
    </div>
  );
};

export default page;
