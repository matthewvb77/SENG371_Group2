import React from "react";
import renderer from "react-test-renderer";
import SlotMachineScreen from "../../Screens/SlotMachineScreen";

describe("<SlotMachineScreen />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SlotMachineScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
