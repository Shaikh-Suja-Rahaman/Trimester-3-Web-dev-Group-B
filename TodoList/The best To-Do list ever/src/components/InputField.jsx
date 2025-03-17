import React, { useState } from "react";

function InputField({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <div className="flex justify-center mt-8 space-x-4">
      <input
        type="text"
        placeholder="Enter task..."
        className="w-64 p-3 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="button"
        className="px-6 py-3 text-white bg-green-700 rounded-lg hover:bg-green-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={(e) => {
          e.preventDefault();
          if (task.trim()) {
            addTodo(task);
            setTask("");
          }
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default InputField;