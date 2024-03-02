import { useRouter } from "next/navigation";
import React from "react";

export default function Mobile_nav() {
  const router = useRouter();
  return (
    <div className="flex justify-evenly fixed bottom-0 w-full p-5 bg-blue-100 ">
      <button className="mr-auto mx-10">activity</button>
      <button className="mx-10">account</button>
      <button onClick={()=>router.push("/mobile_add_expense")} className="bg-red-100 rounded-full p-5 w-max fixed bottom-5 ">
        add expense
      </button>
    </div>
  );
}
