import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress, ButtonStyle, TextStyle }) => {
  return (
    <TouchableOpacity
      className={`flex items-center p-3 rounded-lg border-2 ${ButtonStyle}`}
      onPress={onPress}
    >
      <Text className={`font-bold text-lg text-white text-center ${TextStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
