import React from "react";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: any) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-72 relative group transition-all duration-1000 "
        style={{ background: `url(${imgUrl})`, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#abb9c3] hover:border-white group/link"
          >
            <FaGithub className="h-10 w-10 text-[#abb9c3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {/* <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FaEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link> */}
        </div>
      </div>
      <div className="text-blue-600 rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#8aa8bd] ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;