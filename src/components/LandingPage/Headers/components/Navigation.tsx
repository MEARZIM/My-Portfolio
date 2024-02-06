import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { navItems } from '@/components/LandingPage/Headers/navItems'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = ({toggle}: any) => (
  <motion.ul variants={variants} className="absolute top-[60px] right-[24px] w-48">
    {navItems.map(i => (
      <MenuItem i={i} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

