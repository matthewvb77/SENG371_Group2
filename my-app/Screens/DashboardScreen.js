import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const DashboardScreen = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default DashboardScreen;
