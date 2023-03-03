import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { auth, signInWithEmailAndPassword, db, doc, getDoc } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        getDoc(doc(db, "users", uid)).then((docSnap) => {
          if (docSnap.exists()) {
            const user = docSnap.data();
            navigation.navigate("Dashboard", { user: user });
          } else {
            console.log("No such document");
          }
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View className='flex-1 pt-10'>
      <View className='flex items-center'>
        <Text className='text-4xl font-bold mt-12'>Login</Text>
      </View>
      <View className='mt-12 px-5'>
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Password'
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity
          onPress={handleLoginPress}
          className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg mb-4'
        >
          <Text className='text-lg text-white'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("google pressed")}
          className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg'
        >
          <Text className='text-lg text-white'>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View className='flex items-center mt-6'>
        <Text className='text-lg'>Forgot Password?</Text>
        <Text className='text-lg'>
          Don't have an account?
          <Text
            className='font-bold'
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
