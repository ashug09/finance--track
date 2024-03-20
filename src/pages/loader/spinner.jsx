import React from "react";
import { ColorRing } from "react-loader-spinner";

export default function Spinner({visible}) {
  return (
    <div className="flex justify-center z-50">
      <ColorRing
        visible={visible}
        height="50"
        width="50"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
}
