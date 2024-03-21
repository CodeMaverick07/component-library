import React from "react";
import Drop1 from "./dropdown-1.react";
import Drop2 from "./dropdown-2.react";
import Drop3 from "./dropdown-3.react";
import Drop4 from "./indigo-with-seperate-chevron.react";
import Drop5 from "./simple-dropdown-with-icons.react";
import Drop6 from "./simple-with-account-indigo.react";
import Drop7 from "./simple-with-categories.react";
import Drop8 from "./simple-with-dots.react";

const page = () => {
  return (
    <div>
      <div className="text-center text-xl font-bold">1</div>
      <Drop1 />
      <div className="text-center text-xl font-bold">2</div>
      <Drop2 />
      <div className="text-center text-xl font-bold">3</div>
      <Drop3 />
      <div className="text-center text-xl font-bold">4</div>
      <Drop4 />
      <div className="text-center text-xl font-bold">5</div>
      <Drop5 />
      <div className="text-center text-xl font-bold">6</div>
      <Drop6 />
      <div className="text-center text-xl font-bold">7</div>
      <Drop7 />
      <div className="text-center text-xl font-bold">8</div>
      <Drop8 />
    </div>
  );
};

export default page;
