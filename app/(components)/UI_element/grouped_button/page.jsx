import React from "react";
import Item1 from "./filter-1.react";
import Item2 from "./filter-2.react";
import Item3 from "./with-chevrons.react";
import Item4 from "./with-dropdown.react";
import Item5 from "./with-filter.react";

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
    </div>
  );
};

export default page;
