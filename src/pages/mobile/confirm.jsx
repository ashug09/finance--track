import React from "react";
import { motion } from "framer-motion";
export default function Confirm({open}) {
  const [isOpen, setIsOpen] = React.useState(open);
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <motion.div
          initial={{ y: isOpen ? 0 : "100vh" }}
          animate={{ y: isOpen ? "100vh" : 0 }}
          transition={{ duration: 1.5, type: "just" }}
          className="w-full bg-gray-400 h-32 rounded-t-xl"
        >
          <div>
            <h1 className="mx-5 mt-2 text-white text-3xl">Confirm ?</h1>
            <h1 className="mx-5">are your sure you want to add the expense</h1>
            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" bg-black w-full mx-5 text-white mt-2 px-10 py-2 rounded-xl"
              >
                Yes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
