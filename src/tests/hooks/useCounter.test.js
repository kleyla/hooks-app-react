import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter2 } from "./../../hooks/useCounter2";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter2());
    // console.log(result.current);
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter2(100));
    expect(result.current.counter).toBe(100);
  });

  test("Debe de incrementar el counter", () => {
    const { result } = renderHook(() => useCounter2(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });

    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("Debe de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter2(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });

    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("Debe de resetear el counter", () => {
    const { result } = renderHook(() => useCounter2(100));
    const { reset, increment } = result.current;
    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
