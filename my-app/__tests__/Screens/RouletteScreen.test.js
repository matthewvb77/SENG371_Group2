import React from "react";
import renderer from "react-test-renderer";
import RouletteScreen from "../../Screens/RouletteScreen";

describe("RouletteScreen", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<RouletteScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
