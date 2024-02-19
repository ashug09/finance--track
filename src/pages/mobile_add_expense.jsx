import React from "react";

export default function Mobile_add_expense() {
  return (
    <div>
      <h1 className="text-center text-2xl mt-2">Add Expense</h1>

      {/* input */}
      <div className="flex justify-center my-8">
        <h1 className="text-center text-4xl">₹ </h1>
        <input
          className="w-max text-center"
          type="number"
          placeholder="00.00"
        />
      </div>

      {/* group & category */}
      <div>
        <div className="flex justify-center bg-red-100 p-4 mx-20 my-4 rounded-2xl">
          {/* group input drop down */}
          <div>Buddy Group</div>
        </div>
        <div>
          <div className="flex justify-center bg-blue-100 p-4 mx-20 my-4 rounded-2xl">
            {/* category input drop down */}
            <div>Jain Shikanji</div>
          </div>
        </div>
      </div>

      {/* number input keypad input */}
      <div className="">
      <div className="grid grid-cols-3 mx-auto justify-center">
        <h1 className="text-center text-4xl mt-5">1</h1>
        <h2 className="text-center text-4xl mt-5">2</h2>
        <h2 className="text-center text-4xl mt-5">3</h2>
        <h2 className="text-center text-4xl mt-8">4</h2>
        <h2 className="text-center text-4xl mt-8">5</h2>
        <h2 className="text-center text-4xl mt-8">6</h2>
        <h2 className="text-center text-4xl mt-8">7</h2>
        <h2 className="text-center text-4xl mt-8">8</h2>
        <h2 className="text-center text-4xl mt-8">9</h2>
        <h2 className="text-center text-4xl mt-8">C</h2>
        <h2 className="text-center text-4xl mt-8">0</h2>
        <h2 className="text-center text-4xl mt-8">D</h2>
      </div>
<button className="bg-black text-white text-2xl w-72 mx-auto rounded-lg p-4 mt-5 flex justify-center">Add</button>
      </div>
    </div>
  );
}
