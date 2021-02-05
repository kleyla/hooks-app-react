import { shallow } from "enzyme";
import { RealExampleUseRef } from "../../../components/03-useRef/RealExampleUseRef";

describe("Pruebas en RealExampleUseRef", () => {
  const wrapper = shallow(<RealExampleUseRef />);

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });

  test("Debe de mostrar el componente MultipleCustomHooks", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
