import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DashboardScreen from './Screens/DashboardScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegistrationScreen';
import RouletteScreen from './Screens/RouletteScreen';
import SlotMachineScreen from './Screens/SlotMachineScreen';
import SpinTheWheelScreen from './Screens/SpinTheWheelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={DashboardScreen} />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Roulette' component={RouletteScreen} />
        <Stack.Screen name='Slots' component={SlotMachineScreen} />
        <Stack.Screen name='Spin The Wheel' component={SpinTheWheelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
