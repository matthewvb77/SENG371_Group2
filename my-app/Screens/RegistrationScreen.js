import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import {
  setDoc,
  auth,
  db,
  doc,
  createUserWithEmailAndPassword,
} from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          uid: uid,
          email,
          username: username,
          money: 100,
        };
        setDoc(doc(db, "users", uid), data)
          .then(console.log("Sign up successful"))
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <View className='flex-1 pt-10'>
      <View className='flex items-center'>
        <Text className='text-4xl font-bold mt-12'>Register</Text>
      </View>
      <View className='mt-12 px-5'>
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Email'
          autoCapitalize='none'
          blurOnSubmit={true}
          inputMode='email'
          keyboardType='email-address'
          returnKeyType='next'
          textContentType='emailAddress'
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Username'
          autoCapitalize='none'
          blurOnSubmit={true}
          inputMode='email'
          keyboardType='email-address'
          returnKeyType='next'
          textContentType='emailAddress'
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Password'
          autoCapitalize='none'
          blurOnSubmit={true}
          secureTextEntry={true}
          returnKeyType='next'
          textContentType='password'
          onChangeText={(value) => setPassword(value)}
        />
        <TextInput
          className='h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4'
          placeholder='Password'
          autoCapitalize='none'
          blurOnSubmit={true}
          secureTextEntry={true}
          returnKeyType='done'
          textContentType='password'
          onChangeText={(value) => setConfirmPassword(value)}
        />
        <TouchableOpacity
          className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg mb-4'
          onPress={onRegisterPress}
        >
          <Text className='text-lg text-white'>Register</Text>
        </TouchableOpacity>
      </View>
      <View className='flex items-center mt-6'>
        <Text className='text-lg'>Already have an account? </Text>
        <Text
          className='font-bold text-lg'
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
