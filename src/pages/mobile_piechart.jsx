import React from "react";

export default function Mobile_piechart() {
  const [expanses, setExpenses] = React.useState("hidden");
  return (
    <div className="mx-10 my-8">
      <div className="bg-yellow-100 pt-8 w-full rounded-3xl">
        <div className="border-2 border-green-800 rounded-full w-max mx-auto">
          <h1 className="w-32 h-32 text-center py-12">pie chart</h1>
        </div>

        <button
          onClick={() =>
            expanses == "hidden" ? setExpenses("") : setExpenses("hidden")
          }
          className={
            expanses == "hidden"
              ? "h-10 w-full bg-yellow-500 rounded-b-3xl mt-5"
              : "h-10 w-full bg-yellow-500 mt-5"
          }
        >
          <h1 className="text-center text-white text-xl pt-1">Expenses</h1>
        </button>

        <div className={expanses + " p-5 z-50"}>
          <h1>Groceries - $150</h1>
          <h1>Dining Out - $50</h1>
          <h1>Health Care - $200</h1>
          <h1>Utilities - $100</h1>
          <h1>Transportation - $80</h1>
        </div>
      </div>
    </div>
  );
}
