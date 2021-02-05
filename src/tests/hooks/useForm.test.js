import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Prueba en useForm", () => {
  const initialForm = {
    name: "Karen",
    email: "leyla@live.com",
  };

  test("Debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    // console.log(values);
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Leyla",
        },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Leyla" });
  });

  test("Debe de re-establecer el formulario con REST", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Leyla",
        },
      });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
