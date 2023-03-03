import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DashboardScreen = ({ navigation }) => {
	return (
		<View className='flex items-center mt-6'>
			<Text>Dashboard</Text>
			<Text
			className='font-bold text-lg'
			onPress={() => navigation.navigate("Login")}
			>
			Login
			</Text>
      </View>
	);
};

export default DashboardScreen;
