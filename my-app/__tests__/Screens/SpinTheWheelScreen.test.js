import React from "react";
import renderer from "react-test-renderer";

import SpinTheWheelScreen from "../../Screens/SpinTheWheelScreen";

describe("<SpinTheWheelScreen />", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<SpinTheWheelScreen />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
