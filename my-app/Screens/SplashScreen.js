// loading screen
import { View, Text } from "react-native";
import { ActivityIndicator } from "react-native";

export default SplashScreen = () => {
  return (
    <View className='flex-1 flex-row items-center justify-center'>
      <ActivityIndicator size='large' />
    </View>
  );
};
