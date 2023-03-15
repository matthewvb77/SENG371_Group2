import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { Diamond } from "phosphor-react-native";
import { AuthContext } from "../App";

const RouletteScreen = () => {
  const userData = useContext(AuthContext);
  const [bet, setBet] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState({
    num: null,
    color: "text-gray-900",
    isEven: false,
    is1to18: false,
    is19to36: false,
    win: null,
  });
  const [buttonStates, setButtonStates] = useState({
    range: [false, false],
    evenOdd: [false, false],
    blackRed: [false, false],
  });

  const handleButtonPress = (name, order) => {
    const buttonState = buttonStates[name];
    if (order === 0) {
      buttonState[0] = !buttonState[0];
      if (buttonState[0]) buttonState[1] = false;
    } else {
      buttonState[1] = !buttonState[1];
      if (buttonState[1]) buttonState[0] = false;
    }
    setButtonStates({ ...buttonStates, [name]: buttonState });
  };

  const spin = () => {
    if (
      (buttonStates.range[0] ||
        buttonStates.range[1] ||
        buttonStates.evenOdd[0] ||
        buttonStates.evenOdd[1] ||
        buttonStates.blackRed[0] ||
        buttonStates.blackRed[1]) &&
      bet > 0
    ) {
      random = Math.floor(Math.random() * 36) + 1;

      const result = {
        num: random,
        color: board[random],
        isEven: random % 2 === 0,
        is1to18: random >= 1 && random <= 18,
        is19to36: random >= 19 && random <= 36,
      };

      if (
        (buttonStates.range[0] && result.is1to18) ||
        (buttonStates.range[1] && result.is19to36) ||
        (buttonStates.evenOdd[0] && result.isEven) ||
        (buttonStates.evenOdd[1] && !result.isEven) ||
        (buttonStates.blackRed[0] && result.color === "text-gray-900") ||
        (buttonStates.blackRed[1] && result.color === "text-rose-500")
      ) {
        result["win"] = true;
      } else {
        result["win"] = false;
      }
      setGameOver(true);
      setResult(result);
      setBet(0);
    } else {
      alert("Place a bet!");
    }
  };

  const board = {
    0: "text-green-700",
    1: "text-rose-500",
    2: "text-gray-900",
    3: "text-rose-500",
    4: "text-gray-900",
    5: "text-rose-500",
    6: "text-gray-900",
    7: "text-rose-500",
    8: "text-gray-900",
    9: "text-rose-500",
    10: "text-gray-900",
    11: "text-gray-900",
    12: "text-rose-500",
    13: "text-gray-900",
    14: "text-rose-500",
    15: "text-gray-900",
    16: "text-rose-500",
    17: "text-gray-900",
    18: "text-rose-500",
    19: "text-rose-500",
    20: "text-gray-900",
    21: "text-rose-500",
    22: "text-gray-900",
    23: "text-rose-500",
    24: "text-gray-900",
    25: "text-rose-500",
    26: "text-gray-900",
    27: "text-rose-500",
    28: "text-gray-900",
    29: "text-gray-900",
    30: "text-rose-500",
    31: "text-gray-900",
    32: "text-rose-500",
    33: "text-gray-900",
    34: "text-rose-500",
    35: "text-gray-900",
    36: "text-rose-500",
  };

  return (
    <View className='flex flex-col h-full w-full justify-center items-center'>
      <View className='m-10 py-10'>
        {(gameOver && (
          <>
            <Text
              className={`text-bold font-black text-7xl text-center text-gray-900`}
            >
              {result.win ? "WIN" : "LOSE"}
            </Text>
            <Text
              className={`text-bold font-black text-7xl text-center ${result.color}`}
            >
              {result.num}
            </Text>
          </>
        )) || (
          <Text
            className={`text-bold font-black text-5xl text-center text-gray-900`}
          >
            PLACE A BET!
          </Text>
        )}
      </View>
      <View className='flex justify-center content-center pb-10'>
        <View className='flex flex-row space-5 mx-5'>
          <Button
            ButtonStyle='w-1/3 rounded-r-none bg-gray-600'
            title='$1'
            onPress={() => setBet(bet + 1)}
          />
          <Button
            ButtonStyle='w-1/3 rounded-none bg-gray-600'
            title='$10'
            onPress={() => setBet(bet + 10)}
          />
          <Button
            ButtonStyle='w-1/3 rounded-l-none bg-gray-600'
            title='$100'
            onPress={() => setBet(bet + 100)}
          />
        </View>

        <View className='flex flex-row mt-6 mx-5 space-5'>
          <Button
            ButtonStyle={`w-1/2 rounded-r-none ${
              buttonStates["range"][0] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["range"][0] ? "text-white" : "text-gray-900"
            }`}
            title='1 - 18'
            onPress={() => handleButtonPress("range", 0)}
          />
          <Button
            ButtonStyle={`w-1/2 rounded-l-none ${
              buttonStates["range"][1] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["range"][1] ? "text-white" : "text-gray-900"
            }`}
            title='19 - 36'
            onPress={() => handleButtonPress("range", 1)}
          />
        </View>
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle={`w-1/2 rounded-r-none ${
              buttonStates["evenOdd"][0] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["evenOdd"][0] ? "text-white" : "text-gray-900"
            }`}
            title='Even'
            onPress={() => handleButtonPress("evenOdd", 0)}
          />
          <Button
            ButtonStyle={`w-1/2 rounded-l-none ${
              buttonStates["evenOdd"][1] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["evenOdd"][1] ? "text-white" : "text-gray-900"
            }`}
            title='Odd'
            onPress={() => handleButtonPress("evenOdd", 1)}
          />
        </View>
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle={`w-1/2 rounded-r-none ${
              buttonStates["blackRed"][0] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["blackRed"][0] ? "text-white" : "text-gray-900"
            }`}
            icon={<Diamond size={40} color='#1F2937' weight='fill' />}
            onPress={() => handleButtonPress("blackRed", 0)}
          />
          <Button
            ButtonStyle={`w-1/2 rounded-l-none ${
              buttonStates["blackRed"][1] ? "bg-green-700 border-0" : ""
            }`}
            TextStyle={`${
              buttonStates["blackRed"][1] ? "text-white" : "text-gray-900"
            }`}
            icon={<Diamond size={40} color='#F43F3F' weight='fill' />}
            onPress={() => handleButtonPress("blackRed", 1)}
          />
        </View>
        <View className='flex flex-row space-x-5 mt-6 mx-5'>
          <Button
            ButtonStyle='bg-blue-500 border-0 w-full'
            title='SPIN'
            onPress={spin}
          />
        </View>
        <Text className='text-black text-center text-3xl font-bold pt-10'>
          Bet: ${bet}
        </Text>
        <Text className='text-black text-center text-3xl font-bold pt-10'>
          Money: ${userData.money}
        </Text>
      </View>
    </View>
  );
};

export default RouletteScreen;
