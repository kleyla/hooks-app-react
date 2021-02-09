import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/07-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      item={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("Debe de mostrarse corrreactamente", () => {
    // snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la funcion borrar", () => {
    //   jest function
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de llamar la funcion toggle", () => {
    //   jest function
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("Debe de mostrar el texto correctamente", () => {
    //   Contenido del parrafo
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("Debe de tener la clase complete si el todo.done esta en true", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        item={todo}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
