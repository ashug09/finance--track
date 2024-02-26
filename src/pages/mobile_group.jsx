import React from "react";

export default function Mobile_group() {
  return (
    <div className="mb-8">
      <h1 className="mx-8 mt-4 text-3xl">Groups</h1>
      <div className="grid grid-cols-2">
        <div className="bg-[#EED3D9] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Personnel Finance</h1>
          <h1 className="text-xl text-right">₹4000.00</h1>
        </div>
        <div className="bg-[#F5E8DD] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Buddy Group</h1>
          <h1 className="text-xl text-right">₹5000.00</h1>
        </div>
        <div className="bg-[#CCD3CA] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">Cousin Group</h1>
          <h1 className="text-xl text-right">₹2000.00</h1>
        </div>
        <div className="bg-[#B5C0D0] w-44 m-2 p-4 rounded-2xl">
          <h1 className="text-right">College Group</h1>
          <h1 className="text-xl text-right">₹2500.00</h1>
        </div>
        <div className="bg-[#EED3D9] w-44 mx-2 m-2 p-4 rounded-2xl">
          <h1 className="py-2 text-right">Add Group +</h1>
        </div>
      </div>
    </div>
  );
}