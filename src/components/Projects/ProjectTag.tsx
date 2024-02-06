import React from "react";

const ProjectTag = ({ name, onClick, isSelected }:any) => {
  const buttonStyles = isSelected
    ? "text-black border-blue-600 hover:border-blue-800"
    : "text-blue-800 border-primary-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;