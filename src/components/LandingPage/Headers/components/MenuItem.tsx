import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i,toggle }: any) => {

  const style = { border: `2px solid ${colors[i.id]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2"
    >
      <Link
        activeClass="active"
        to={i.path}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={toggle} 
      >
        <div className="text-placeholder" style={style} >{i.text}</div>
      </Link>
    </motion.li>
  );
};
