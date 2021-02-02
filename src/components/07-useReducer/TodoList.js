import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((item, index) => {
        return (
          <TodoListItem
            key={item.id}
            item={item}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
};
