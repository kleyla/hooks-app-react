import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/07-useReducer/TodoAdd";

describe("Pruebas en TodoAdd", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("NO Debe de llamar handleAddTodo", () => {
    const formSumit = wrapper.find("form").prop("onSubmit");
    formSumit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar la funcion handleAddTodo", () => {
    const value = "Aprender react";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });
    const formSumit = wrapper.find("form").prop("onSubmit");
    formSumit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
