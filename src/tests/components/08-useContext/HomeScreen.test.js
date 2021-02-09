import { mount } from "enzyme";
import { HomeScreen } from "../../../components/08-useContext/HomeScreen";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Pruebas en HomeScreen", () => {
  const user = {
    name: "Karen",
    email: "Ley@live.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("Debe de mostrarse correctamete", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
