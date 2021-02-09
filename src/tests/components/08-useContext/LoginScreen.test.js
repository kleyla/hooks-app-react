import { mount } from "enzyme";
import { LoginScreen } from "../../../components/08-useContext/LoginScreen";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Pruebas en LoginScreen", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "karen" });
  });
});
