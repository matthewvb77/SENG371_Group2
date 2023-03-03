import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DashboardScreen = ({ navigation }) => {
	return (
		<View className='flex items-center mt-6'>
			<Text>Dashboard</Text>
			<View className='flex items-center mt-6 bg-rose-500 p-3 rounded-full border-2 border-rose-700 w-1/2'>
				<Text
				className='font-bold text-lg text-white text-center'
				onPress={() => navigation.navigate("Roulette")}
				>
				Roulette
				</Text>
			</View>
			<View className='flex items-center mt-6 bg-rose-500 p-3 rounded-full border-2 border-rose-700 w-1/2'>
				<Text
				className='font-bold text-lg text-white text-center'
				onPress={() => navigation.navigate("Slots")}
				>
				Slots
				</Text>
			</View>
			<View className='flex items-center mt-6 bg-rose-500 p-3 rounded-full border-2 border-rose-700 w-1/2'>
				<Text
				className='font-bold text-lg text-white text-center'
				onPress={() => navigation.navigate("Spin The Wheel")}
				>
				Spin The Wheel
				</Text>
			</View>
      </View>
	);
};

export default DashboardScreen;
