import React from "react";
import From1 from "./account-information.react";
import From2 from "./payment-method.react";
import From3 from "./simple-action-panel-with-button.react";
import From4 from "./simple-with-cta.react";
import From5 from "./simple-with-icon-and-fill-button.react";
import From6 from "./simple-with-left-aligned-button.react";
import From7 from "./simple-with-link.react";
import From8 from "./simple-with-toggle-on-top.react";
import From9 from "./text-field-and-button.react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="h-screen">
        {" "}
        <div className="text-center text-xl font-bold">1</div>
        <From1 className="h-screen" />
      </div>

      <div className="text-center text-xl font-bold">2</div>
      <From2 className="h-full" />
      <div className="text-center text-xl font-bold">3</div>
      <From3 className="h-full" />
      <div className="text-center text-xl font-bold">4</div>
      <From4 className="h-full" />
      <div className="text-center text-xl font-bold">5</div>
      <From5 className="h-full" />
      <div className="text-center text-xl font-bold">6</div>
      <From6 className="h-full" />
      <div className="text-center text-xl font-bold">7</div>
      <From7 className="h-full" />
      <div className="text-center text-xl font-bold">8</div>
      <From8 className="h-full" />
      <div className="text-center text-xl font-bold">9</div>
      <From9 className="h-full" />
    </div>
  );
};

export default page;
