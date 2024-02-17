import React from "react";

export default function Group() {
  return (
    <>
      <h1 className="mx-8 mt-4 text-3xl">Groups</h1>
      <div className="flex overflow-x-auto">
        <div className="bg-[#EED3D9] w-max m-4 p-4 rounded-2xl">
          <h1>Personnel Finance</h1>
          <h1 className="text-xl text-right">₹4000.00</h1>
        </div>

        <div className="bg-[#F5E8DD] w-max m-4 p-4 rounded-2xl">
          <h1>Buddy Group</h1>
          <h1 className="text-xl text-right">₹5000.00</h1>
        </div>

        <div className="bg-[#CCD3CA] w-max m-4 p-4 rounded-2xl">
          <h1>Cousin Group</h1>
          <h1 className="text-xl text-right">₹2000.00</h1>
        </div>

        <div className="bg-[#B5C0D0] w-max m-4 p-4 rounded-2xl">
          <h1>College Group</h1>
          <h1 className="text-xl text-right">₹2500.00</h1>
        </div>

        <div className="bg-[#EED3D9] w-max m-4 p-4 rounded-2xl">
          <h1 className="mt-4">Add Group +</h1>
        </div>
      </div>
    </>
  );
}
