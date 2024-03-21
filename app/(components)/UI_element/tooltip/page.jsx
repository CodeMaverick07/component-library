import React from "react";
import Item1 from "./simple.react";
import Item2 from "./text-only.react";
import Item3 from "./tooltip-1.react";
import Item4 from "./tooltip-2.react";
import Item5 from "./tooltip-3.react";
import Item6 from "./with-button.react";
import Item7 from "./with-cta.react";
import Item8 from "./with-double-cta.react";
import Item9 from "./with-icon.react";
import Item10 from "./with-multiple-cta-alternate.react";
import Item11 from "./with-steps-alternate.react";

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
