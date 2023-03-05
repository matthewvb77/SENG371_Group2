import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";

const RouletteScreen = () => {
  const [bet, setBet] = useState("");
  const [result, setResult] = useState("");

  return (
    <View className='flex items-center my-6'>
      <View className='h-2/3'>
        <Text>{result}</Text>
      </View>
      <View className='flex flex-row space-x-5 mt-6 mx-5'>
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='1 - 18'
        />
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='19 - 36'
        />
      </View>
      <View className='flex flex-row space-x-5 mt-6 mx-5'>
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='Even'
        />
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='Odd'
        />
      </View>
      <View className='flex flex-row space-x-5 mt-6 mx-5'>
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='Black'
        />
        <Button
          ButtonStyle='bg-green-700 border-green-900 w-1/2 mx-2'
          title='Red'
        />
      </View>
    </View>
  );
};

export default RouletteScreen;
