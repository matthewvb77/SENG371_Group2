import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
// import LoginScreen from "./Screens/LoginScreen";
// import RouletteScreen from "./Screens/RouletteScreen";
// import SlotMachineScreen from "./Screens/SlotMachineScreen";
// import SpinTheWheelScreen from "./Screens/SpinTheWheelScreen";

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				{/* <Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Roulette" component={RouletteScreen} />
				<Stack.Screen name="Slots" component={SlotMachineScreen} />
				<Stack.Screen name="Spin The Wheel" component={SpinTheWheelScreen} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
