/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import ToDoItem from "./ToDoItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useSnackbar } from "notistack";

const ToDoList = (props) => {
  const [todo, setTodo] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoItem = {
      title: todo,
      completed: false,
      position: props.myTodos.length,
    };

    props.setMyTodos((prev) => {
      return [...prev, newTodoItem];
    });
    enqueueSnackbar("Todo Added", { variant: "success" });
    setTodo("");
  };

  return (
    <motion.div
      className="bg-teal-200 p-2 flex w-3/4 gap-2 flex-col items-center rounded-xl max-md:w-5/6"
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
    >
      <form
        action="/add"
        method="post"
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center w-full items-center p-2 gap-4 max-sm:gap-2"
      >
        <input
          type="text"
          value={todo}
          required
          className="text-center w-full border-2 rounded-md py-2 font-mono text-xl focus:outline-none focus:border-2 focus:border-slate-700 max-md:w-3/4 max-md:text-lg max-sm:text-sm"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter Your Todo..."
        />
        <motion.button type="submit" whileHover={{ scale: "1.25px" }}>
          <IoIosAddCircleOutline className="text-5xl bg-purple-400 hover:bg-purple-500 rounded-full  max-md:text-4xl max-sm:text-3xl" />
        </motion.button>
      </form>
      <div className="px-5 w-full py-2 max-h-120 overflow-y-auto">
        {props.myTodos.map((todoItem, index) => (
          <ToDoItem key={index} todoItem={todoItem} />
        ))}
      </div>
    </motion.div>
  );
};

export default ToDoList;
