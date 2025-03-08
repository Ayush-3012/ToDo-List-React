/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Header = () => {
  const today = new Date().toLocaleString("en-IN", {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.div
      className="text-xl bg-cyan-300 self-stretch mx-10 font-mono font-bold text-slate-950 py-4 rounded-md text-center"
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
    >
      <h4>{today}</h4>
    </motion.div>
  );
};

export default Header;
