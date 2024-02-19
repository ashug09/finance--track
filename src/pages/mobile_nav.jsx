import React from "react";

export default function Mobile_nav() {
  return (
    <div className="flex justify-evenly fixed bottom-0 w-full p-5 bg-blue-100 ">
      <button className="mr-auto mx-10">activity</button>
      <button className="mx-10">account</button>
      <button className="bg-red-100 rounded-full p-5 w-max fixed bottom-5 ">
        add expense
      </button>
    </div>
  );
}
