import React from "react";
import { motion } from "framer-motion";

type props ={
    active : boolean,
    selectTab: ()=> void,
    children:  any
}
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};


const TabButton = ({ active, selectTab, children }: props ) => {
  const buttonClasses = active ? "text-blue-500" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-blue-800 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;