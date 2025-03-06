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
      className="text-xl bg-slate-600 self-stretch mx-10 font-mono font-bold text-slate-100 py-4 rounded-md text-center"
      // animate={{ x: [100, 50, 0, -10, 0] }}
      // transition={{ duration: 0.8 }}
      animate={{
        // backgroundColor: ["#27ffb1", "#ff9f67", "#67c7ff", "#ff5", "#27ffb1"],
        x: [100, 50, 0, -10, 0],
      }}
      transition={{ duration: 0.8 }}
    >
      <h4>{today}</h4>
    </motion.div>
  );
};

export default Header;
