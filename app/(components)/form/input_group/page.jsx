import React from "react";
import Input1 from "./input-with-error-success.react";
import Input2 from "./input-with-filter.react";
import Input3 from "./input-with-help-text.react";
import Input4 from "./input-with-icon-at-end.react";
import Input5 from "./input-with-icon-at-start.react";
import Input6 from "./input-with-label-help-text.react";
import Input7 from "./input-with-select.react";
import Input8 from "./input-with-select-at-end.react";
import Input9 from "./input-with-label.react";

const page = () => {
  return (
    <div>
      <div className="text-xl font-bold text-center">1</div>
      <Input1 />
      <div className="text-xl font-bold text-center">2</div>
      <Input2 />
      <div className="text-xl font-bold text-center">3</div>
      <Input3 />
      <div className="text-xl font-bold text-center">4</div>
      <Input4 />
      <div className="text-xl font-bold text-center">5</div>
      <Input5 />
      <div className="text-xl font-bold text-center">6</div>
      <Input6 />
      <div className="text-xl font-bold text-center">7</div>
      <Input7 />
      <div className="text-xl font-bold text-center">8</div>
      <Input8 />
      <div className="text-xl font-bold text-center">9</div>
      <Input9 />
    </div>
  );
};

export default page;
