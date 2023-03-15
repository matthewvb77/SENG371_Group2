import { StyleSheet } from "react-native";
import { useContext, useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./Screens/DashboardScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegistrationScreen";
import RouletteScreen from "./Screens/RouletteScreen";
import SlotMachineScreen from "./Screens/SlotMachineScreen";
import SpinTheWheelScreen from "./Screens/SpinTheWheelScreen";
import SplashScreen from "./Screens/SplashScreen";
import { auth, db, doc, getDoc, onAuthStateChanged } from "./firebase";

const Stack = createNativeStackNavigator();
export const AuthContext = createContext();

export default function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const docSnap = await getDoc(doc(db, "users", user.uid));
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setUser(user);
          } else {
            console.log("No such document");
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={userData}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <>
              <Stack.Screen name='Dashboard' component={DashboardScreen} />
              <Stack.Screen name='Roulette' component={RouletteScreen} />
              <Stack.Screen name='Slots' component={SlotMachineScreen} />
              <Stack.Screen
                name='Spin The Wheel'
                component={SpinTheWheelScreen}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
