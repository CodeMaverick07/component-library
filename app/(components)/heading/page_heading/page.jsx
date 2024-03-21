import React from "react";
import Item1 from "./background-with-breadcrumbs.react";
import Item2 from "./black-with-breadcrumbs.react";
import Item3 from "./black-with-profile-and-breadcrumbs.react";
import Item4 from "./black-with-sub-text.react";
import Item5 from "./simple-with-sub-text-and-border.react";
import Item6 from "./simple-with-buttons.react";
import Item7 from "./page-heading-1.react";

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
