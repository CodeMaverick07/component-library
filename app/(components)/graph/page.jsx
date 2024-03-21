import React from "react";
import Bar1 from "./graph/bar-charts.react";
import Bar2 from "./graph/line-graph.react";
import Bar3 from "./graph/pie-chart.react";

const page = () => {
  return (
    <div>
      <div className="text-center font-bold text-xl">1</div>
      <Bar1 />
      <div className="text-center font-bold text-xl">2</div>
      <Bar2 />
      <div className="text-center font-bold text-xl">3</div>
      <Bar3 />
    </div>
  );
};

export default page;
