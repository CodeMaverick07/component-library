import React from "react";
import Item1 from "./note/note-4.react";
import Item2 from "./note/note-3.react";
import Item3 from "./note/note-2.react";
import Item4 from "./note/note-1.react";
import Item5 from "./note/4-by-3-multiple-styled-cards.react";
import Item6 from "./note/3-by-3-kanban-board.react";
import Item7 from "./note/note.react";

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
