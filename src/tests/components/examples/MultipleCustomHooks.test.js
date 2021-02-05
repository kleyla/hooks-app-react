import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch2";
jest.mock("../../../hooks/useFetch2");

describe("Prueba en MultipleCustomHooks", () => {
  test("Debe de mostrarse correctamente ", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la info", () => {
    // const { data } = useFetch();
    useFetch.mockReturnValue({
      data: [
        {
          author: "Karen",
          quote: "Holi",
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);
    // console.log(wrapper.html());
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").test().trim()).toBe("Holi");
    expect(wrapper.find("footer").test().trim()).toBe("Karen");
  });
});
