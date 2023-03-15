import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { auth } from "../firebase";
import { AuthContext } from "../App";
import Button from "../components/Button";

const DashboardScreen = ({ navigation }) => {
  const userData = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View className='flex items-center mt-6'>
      <Text>Hello, {userData.username || userData.email}</Text>
      <View className='flex items-center mt-6 p-3 w-full'>
        <Button
          ButtonStyle='w-1/2 bg-rose-500 border-rose-700'
          TextStyle='text-white'
          title='Roulette'
          onPress={() => navigation.navigate("Roulette")}
        />
      </View>
      <View className='flex items-center mt-6 p-3 w-full'>
        <Button
          ButtonStyle='w-1/2 bg-rose-500 border-rose-700'
          TextStyle='text-white'
          title='Slots'
          onPress={() => navigation.navigate("Slots")}
        />
      </View>
      <View className='flex items-center mt-6 p-3 w-full'>
        <Button
          ButtonStyle='w-1/2 bg-rose-500 border-rose-700'
          TextStyle='text-white'
          title='Spin The Wheel'
          onPress={() => navigation.navigate("Spin The Wheel")}
        />
      </View>
      <View className='flex items-center mt-6 p-3 w-full'>
        <Button
          ButtonStyle='w-1/2 bg-gray-700 border-full rounded-full'
          TextStyle='text-white'
          title='Sign Out'
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default DashboardScreen;
