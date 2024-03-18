import React from "react";
import Mobile_total_spending from "../mobile_total_spending";
import Mobile_piechart from "./mobile_piechart";
import Mobile_group from "./mobile_group";
import Mobile_category from "./mobile_category";
import Mobile_nav from "./mobile_nav";

export default function Mobile_home() {
  return (
    <>
      <div className="mb-20">
        <Mobile_total_spending />
        <Mobile_piechart />
        <Mobile_group />
        <Mobile_category />
      </div>
    </>
  );
}
