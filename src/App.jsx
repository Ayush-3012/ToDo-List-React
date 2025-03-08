/* eslint-disable no-unused-vars */
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import ToDoList from "./components/ToDoList";
import { motion } from "framer-motion";

const App = () => {
  const [myTodos, setMyTodos] = useState([]);

  return (
    <motion.div
      className="flex flex-col gap-8 py-4 bg-purple-400 h-screen overflow-hidden
        items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
      <ToDoList myTodos={myTodos} setMyTodos={setMyTodos} />
      <Footer />
    </motion.div>
  );
};

export default App;
