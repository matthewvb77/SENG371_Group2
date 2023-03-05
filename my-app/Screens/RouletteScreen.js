import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { Diamond } from "phosphor-react-native";

const RouletteScreen = () => {
  const [bet, setBet] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <View className='flex flex-col h-full w-full justify-center items-center'>
      <View className='m-10'>
        <Text className='text-bold font-black text-5xl'>
          {result || "PLACE A BET!"}
        </Text>
      </View>
      <View className='flex justify-center content-center h-1/3 mb-7'>
        <View className='flex flex-row mt-6 mx-5 space-5'>
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-r-none'
            title='1 - 18'
          />
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-l-none'
            title='19 - 36'
          />
        </View>
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-r-none'
            title='Even'
          />
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-l-none'
            title='Odd'
          />
        </View>
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-r-none'
            icon={<Diamond size={40} color='#1F2937' weight='fill' />}
          />
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-1/2 rounded-l-none'
            icon={<Diamond size={40} color='#F43F3F' weight='fill' />}
          />
        </View>
      </View>
    </View>
  );
};

export default RouletteScreen;
