import { Input } from "@/components/ui/input";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Mobile_add_expense() {
  return (
    <div>
      <h1 className="text-center text-2xl mt-2">Add Expense</h1>

      {/* input */}
      <div className="flex justify-center my-8">
        <h1 className="text-center text-4xl">₹ </h1>
        <input
          className="w-max text-center outline-none"
          type="tel"
          placeholder="00.00"
        />
      </div>

      {/* group & category */}
      <div>
        <div className="flex justify-center bg-red-100 p-4 mx-20 my-4 rounded-2xl">
          {/* group input drop down */}
          <Select className="outline-none">
            <SelectTrigger className="w-[180px]">
              <SelectValue className="outline-none" placeholder="Select Group" />
            </SelectTrigger>
            <SelectContent className="outline-none">
              <SelectItem className="outline-none" value="Personnel">Personnel</SelectItem>
              <SelectItem className="outline-none" value="Buddy">Buddy</SelectItem>
              <SelectItem className="outline-none" value="College">College</SelectItem>
              <SelectItem className="outline-none" value="Cousin">Cousin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <div className="flex justify-center bg-blue-100 p-4 mx-20 my-4 rounded-2xl">
            {/* category input drop down */}
            <Select className="outline-none">
            <SelectTrigger className="w-[180px]">
              <SelectValue className="outline-none" placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="outline-none">
              <SelectItem className="outline-none" value="Food">Food</SelectItem>
              <SelectItem className="outline-none" value="Entertainment">Entertainment</SelectItem>
              <SelectItem className="outline-none" value="Wellness">Wellness</SelectItem>
              <SelectItem className="outline-none" value="Lifestyle">Lifestyle</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>
      </div>
      <div>
      <Button className="flex mx-auto my-4" size="lg">Add Expense</Button>

      </div>

      {/* number input keypad input */}
      {/* <div className="">
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
        <button className="bg-black text-white text-2xl w-72 mx-auto rounded-lg p-4 mt-5 flex justify-center">
          Add
        </button>
      </div> */}
    </div>
  );
}
