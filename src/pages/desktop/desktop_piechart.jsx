import React from "react";

export default function Desktop_piechart() {
  return (
    <div className="rounded-xl mx-5 my-4 p-8 h-72 bg-[#ECE8DD] flex">
      <div className="mr-auto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJd-7tvZMPZbRjhc29MyNkf0KeJnF-OCAP2A&usqp=CAU"/>
      </div>

      <div className="rounded-xl ml-56 w-56 bg-[#40A2E3] overflow-y-auto">
        <h1 className='text-3xl fixed rounded-xl text-white bg-[#40A2E3] w-56 px-4 py-1'>Expenses</h1>
        <div className="mt-10 px-5">
        <ol type="1">
          <li className="text-white">Groceries - $150 </li>
          <li className="text-white">Dining Out - $50 </li>
          <li className="text-white">Health Insurance - $200 </li>
          <li className="text-white">Utilities - $100 </li>
          <li className="text-white">Transportation - $80 </li>
          <li className="text-white">Entertainment - $30 </li>
          <li className="text-white">Groceries - $150 </li>
          <li className="text-white">Dining Out - $50 </li>
          <li className="text-white">Health Insurance - $200 </li>
          <li className="text-white">Utilities - $100 </li>
          <li className="text-white">Transportation - $80 </li>
          <li className="text-white">Entertainment - $30 </li>
        </ol>

        </div>
      </div>
    </div>
  );
}
