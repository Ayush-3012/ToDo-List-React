/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { FaCheck, FaEdit, FaThumbsUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const ToDoItem = ({ todoItem }) => {
  const [checked, setChecked] = useState(todoItem.completed);
  const [todo, setTodo] = useState(todoItem.title);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <motion.div className="flex my-2 justify-between border-b-2">
      <motion.div
        className="flex gap-2 justify-start items-center  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [50, 0, -20, -10, 0] }}
        transition={{ duration: 0.4 }}
      >
        {!isDeleted && checked && (
          <FaThumbsUp className="text-xl text-emerald-600 max-md:text-lg max-sm:text-sm" />
        )}
        {isDeleted && (
          <ImCross className="text-xl text-red-600 max-md:text-lg max-sm:text-sm" />
        )}
        {!isDeleted && (
          <motion.input
            type="checkbox"
            className="w-10 h-5 cursor-pointer accent-purple-600 max-sm:w-3"
            whileHover={{ scale: 1.18 }}
            checked={checked}
            onChange={() => {
              !checked
                ? enqueueSnackbar("Done 😄", {
                    variant: "success",
                  })
                : enqueueSnackbar("Not Done 🥺", {
                    variant: "error",
                  });
              setChecked(!checked);
            }}
          />
        )}
        {!isDeleted && !checked && isEditing ? (
          <input
            className={`outline-2 px-2 text-2xl flex gap-2 font-mono font-bold max-sm:text-lg text-slate-700`}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        ) : (
          <motion.p
            className={`${checked ? "line-through" : ""} ${
              isDeleted ? "text-black" : "text-slate-700"
            } text-2xl flex gap-2 font-mono font-bold max-sm:text-lg `}
            whileHover={!isDeleted && { translateY: "-5px", color: "#f80f80" }}
          >
            {todo}
          </motion.p>
        )}
      </motion.div>
      <motion.div className="flex items-center gap-2 justify-center">
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            enqueueSnackbar("Todo Edited", { variant: "info" });
          }}
        >
          {!isDeleted && !checked && !isEditing && (
            <FaEdit className="text-3xl text-gray-700 cursor-pointer hover:-translate-y-1.5 transition-all ease-out duration-150 max-md:text-2xl max-sm:text-xl" />
          )}
          {!isDeleted && isEditing && (
            <FaCheck className="text-3xl text-green-700 cursor-pointer hover:-translate-y-1.5 transition-all ease-out duration-150 max-md:text-2xl max-sm:text-xl" />
          )}
        </button>
        <button
          onClick={() => {
            setIsDeleted(true);
            enqueueSnackbar("Todo Deleted", { variant: "error" });
          }}
        >
          <MdDelete className="text-4xl text-red-500 cursor-pointer hover:-translate-y-1.5 transition-all ease-out duration-150 max-md:text-2xl max-sm:text-xl" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ToDoItem;
