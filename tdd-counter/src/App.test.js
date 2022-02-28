import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';
import Enzyme from 'enzyme';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });



describe("Counter Testing", () => {

  
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the tile of the counter", () => {

    //console.log(wrapper.debug()); 
    expect(wrapper.find('h1').text()).toContain("This is a counter app.");
    // render(<App />);
    // const linkElement = screen.getByText("This is a counter app.");
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  
  test("render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find('#increment-btn').simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find('#decrement-btn').simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });


});
