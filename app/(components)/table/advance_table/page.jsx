import React from "react";
import Item1 from "./advance-table-with-filters-actions-search-sort-and-expanded-row.react";
import Item2 from "./advance-table-with-filters-search-and-two-level-action-buttons.react";
import Item3 from "./compact-table-with-actions-and-select.react";
import Item4 from "./table-2.react";
import Item5 from "./table-3.react";
import Item6 from "./table-4.react";
import Item7 from "./table-5.react";
import Item8 from "./table.react";
import Item9 from "./tasks.react";

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
