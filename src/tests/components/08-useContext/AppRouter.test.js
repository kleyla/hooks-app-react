import { mount } from "enzyme";
import { AppRouter } from "../../../components/08-useContext/AppRouter";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Pruebas en AppRouter", () => {
  const user = {
    name: "Karen",
    email: "Ley@live.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
