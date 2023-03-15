import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

const SlotMachineScreen = () => {
  const items = ["Bat", "Duck", "Camera", "Car", "Candy", "Tree", "Oil"];

  var betAmount = 0;

  const [count, setCount] = useState(0);
  const [text1, setText1] = useState("SPIN");
  const [text2, setText2] = useState("SPIN");
  const [text3, setText3] = useState("SPIN");
  const [userAmount, setAmount] = useState(200);

  /*function to increase count by 1*/
  const increaseBetAmountBy = (value) => {
    newAmount = count + value;
    if (newAmount <= userAmount) {
      setCount(count + value);
    } else {
      alert("You don't have enough money to add more to the current bet");
    }
  };

  const spin = () => {
    if (count == 0) {
      alert("You need to bet money before you can spin the slot machine");
      return;
    }

    setAmount(userAmount - count);
    setCount(0);

    const numberOfItems = items.length;
    const randomIndex1 = Math.floor(Math.random() * numberOfItems);
    const randomIndex2 = Math.floor(Math.random() * numberOfItems);
    const randomIndex3 = Math.floor(Math.random() * numberOfItems);
    var multiplier = 0;

    setText1(items[randomIndex1]);
    setText2(items[randomIndex2]);
    setText3(items[randomIndex3]);

    if (randomIndex1 == randomIndex2 && randomIndex2 == randomIndex3) {
      //duck - duck - duck
      if (randomIndex1 == 1) {
        multiplier = 3;
      } //chocolate - chocolate - chocolate
      else if (randomIndex1 == 4) {
        multiplier = 4;
      } else if (randomIndex1 == 0) {
        multiplier = 8;
      } else if (randomIndex1 == 5) {
        multiplier = 200;
      } else if (randomIndex1 == 6) {
        multiplier = 2000;
      } else if (randomIndex1 == 3) {
        multiplier = 1000;
      }
    }

    if (multiplier == 0) {
      alert("You LOSSEEEE - L");
    } else {
      alert("You WINNNNN: $" + multiplier * count);
      setAmount(userAmount + multiplier * count);
    }
  };

  return (
    <View>
      <View className='flex items-end'>
        <Text className='text-sm font-bold mt-7 mr-12'>
          Dough: ${userAmount}
        </Text>
      </View>

      <View className='flex items-center'>
        <Text className='text-4xl font-bold mt-6'>Slot Machine</Text>
      </View>

      {/* Slot Machine UI without image assets*/}
      <View className='flex items-center mt-12'>
        <View style={{ flexDirection: "row" }}>
          {/* TODO: Make the text vertically in the center */}

          <View
            className='items-center '
            style={{ backgroundColor: "green", width: 100, height: 100 }}
          >
            <Text className='text-2xl font-bold mt-8 text-white'>{text1}</Text>
          </View>
          <View
            className='items-center'
            style={{ backgroundColor: "red", width: 100, height: 100 }}
          >
            <Text className='text-2xl font-bold mt-8 text-white'>{text2}</Text>
          </View>
          <View
            className='items-center'
            style={{ backgroundColor: "yellow", width: 100, height: 100 }}
          >
            <Text className='text-2xl font-bold mt-8'>{text3}</Text>
          </View>
        </View>
      </View>

      <View className='flex items-center'>
        <Text className='text-sm font-bold mt-7 mr-12'>
          Current Bet: ${count}
        </Text>
      </View>

      {/* List of buttons with 1$, 5$, 20$, 50$, 100$, 1000$ labels in a horizontal stack, in the same line */}

      <View className='flex items-center mt-12'>
        <View className='gap-4' style={{ flexDirection: "row" }}>
          <View
            className='items-center rounded-full border-2 border-green-900'
            style={{ backgroundColor: "green", width: 80, height: 50 }}
          >
            <Text
              className='text-4xl font-bold mt-1 text-white'
              onPress={() => increaseBetAmountBy(1)}
            >
              $1
            </Text>
          </View>
          <View
            className='items-center rounded-full border-2 border-red-900'
            style={{ backgroundColor: "red", width: 80, height: 50 }}
          >
            <Text
              className='text-4xl font-bold mt-1 text-white'
              onPress={() => increaseBetAmountBy(5)}
            >
              $5
            </Text>
          </View>
          <View
            className='items-center rounded-full border-2 border-orange-500'
            style={{ backgroundColor: "orange", width: 80, height: 50 }}
          >
            <Text
              className='text-4xl font-bold mt-1 text-white'
              onPress={() => increaseBetAmountBy(10)}
            >
              $10
            </Text>
          </View>
          <View
            className='items-center rounded-full border-2 border-blue-900'
            style={{ backgroundColor: "blue", width: 80, height: 50 }}
          >
            <Text
              className='text-4xl font-bold mt-1 text-white'
              onPress={() => increaseBetAmountBy(50)}
            >
              $50
            </Text>
          </View>
        </View>
      </View>

      <View className='flex items-center mt-6'>
        <View className='flex items-center mt-6 bg-rose-500 p-3 rounded-full border-2 border-rose-700 w-1/2'>
          <Text
            className='font-bold text-5xl text-white text-center'
            onPress={() => {
              spin();
            }}
          >
            $pin
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SlotMachineScreen;
