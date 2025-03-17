import React from "react";

function List({ todos, removeTodo }) {
  return (
    <ul className="mt-8 space-y-4 max-w-md mx-auto">
      {todos.map((task, index) => (
        <li
          key={index}
          className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-lg font-medium">{task}</span>
          <button
            onClick={() => removeTodo(index)}
            className="text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;