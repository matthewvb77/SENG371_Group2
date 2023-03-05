import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { Diamond } from 'phosphor-react-native';

const RouletteScreen = () => {
  const [bet, setBet] = useState(0);
  const [result, setResult] = useState({
    num: null,
    color: 'text-gray-900',
    isEven: false,
    is1to18: false,
    is19to36: false,
  });

  const board = {
    0: 'text-green-700',
    1: 'text-rose-500',
    2: 'text-gray-900',
    3: 'text-rose-500',
    4: 'text-gray-900',
    5: 'text-rose-500',
    6: 'text-gray-900',
    7: 'text-rose-500',
    8: 'text-gray-900',
    9: 'text-rose-500',
    10: 'text-gray-900',
    11: 'text-gray-900',
    12: 'text-rose-500',
    13: 'text-gray-900',
    14: 'text-rose-500',
    15: 'text-gray-900',
    16: 'text-rose-500',
    17: 'text-gray-900',
    18: 'text-rose-500',
    19: 'text-rose-500',
    20: 'text-gray-900',
    21: 'text-rose-500',
    22: 'text-gray-900',
    23: 'text-rose-500',
    24: 'text-gray-900',
    25: 'text-rose-500',
    26: 'text-gray-900',
    27: 'text-rose-500',
    28: 'text-gray-900',
    29: 'text-gray-900',
    30: 'text-rose-500',
    31: 'text-gray-900',
    32: 'text-rose-500',
    33: 'text-gray-900',
    34: 'text-rose-500',
    35: 'text-gray-900',
    36: 'text-rose-500',
  };

  const clearBet = () => {
    setBet(0);
  };

  const spin = () => {
    random = Math.floor(Math.random() * 36) + 1;
    const result = {
      num: random,
      color: board[random],
      isEven: random % 2 === 0,
      is1to18: random >= 1 && random <= 18,
      is19to36: random >= 19 && random <= 36,
    };
    setResult(result);
  };

  return (
    <View className='flex flex-col h-full w-full justify-center items-center'>
      <View className='m-10'>
        <Text className={`text-bold font-black text-5xl ${result.color}`}>
          {result.num || 'PLACE A BET!'}
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
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle='bg-green-700 border-green-900 w-full'
            title='SPIN'
            onPress={spin}
          />
        </View>
      </View>
    </View>
  );
};

export default RouletteScreen;
