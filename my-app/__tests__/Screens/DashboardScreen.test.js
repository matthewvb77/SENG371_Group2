import React from "react";
import renderer from "react-test-renderer";

import DashboardScreen from "../../Screens/DashboardScreen";

describe("<DashboardScreen />", () => {
	it("renders correctly", () => {
		const tree = renderer.create(<DashboardScreen />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
