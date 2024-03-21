import Link from "next/link";
import React from "react";

const page = () => {
  const map = [{ name: "card_heading" }, { name: "page_heading" }];
  return (
    <main className="flex justify-center">
      <div className="max-w-7xl flex flex-wrap justify-evenly gap-10 mt-10">
        {map.map((item) => {
          return (
            <Link
              className="dark:bg-blue-900 bg-slate-100 h-64 w-64 rounded-lg flex items-center justify-center text-xl font-semibold shadow-md border border-black"
              href={`/heading/${item.name}`}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default page;
