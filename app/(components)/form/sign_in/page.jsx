import React from "react";
import Sign1 from "./half-page-with-illustration.react";
import Sign2 from "./half-page-with-image.react";
import Sign3 from "./indigo-full-page.react";
import Sign4 from "./sign-in-2.react";
import Sign5 from "./sign-in.react";

const page = () => {
  return (
    <div>
      <div className="text-center text-xl font-bold">1</div>
      <Sign1 />
      <div className="text-center text-xl font-bold">2</div>
      <Sign2 />
      <div className="text-center text-xl font-bold">3</div>
      <Sign3 />
      <div className="text-center text-xl font-bold">4</div>
      <Sign4 />
      <div className="text-center text-xl font-bold">5</div>
      <Sign5 />
    </div>
  );
};

export default page;
