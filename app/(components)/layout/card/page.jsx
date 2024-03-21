import React from "react";
import Item1 from "./6-col-divided-in-half-left-and-right.react";
import Item2 from "./6-col-with-grey-top-and-grey-bottom.react";
import Item3 from "./full-width-divided-by-right-and-bottom-grey.react";
import Item4 from "./full-width-divided-into-three.react";
import Item5 from "./full-width-white.react";
import Item6 from "./full-width-with-left-grey.react";
import Item7 from "./full-width-with-right-grey.react";
import Item8 from "./simple-with-white-footer.react";

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
    </div>
  );
};

export default page;
