import React from "react";

export const TodoListItem = ({ item, index, handleToggle, handleDelete }) => {
  return (
    <li key={item.id} className="list-group-item">
      <p
        className={`${item.done && "complete"}`}
        onClick={() => handleToggle(item.id)}
      >
        {index + 1}. {item.desc}{" "}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
        Borrar
      </button>
    </li>
  );
};
