import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Register the user with the email and password
    // using Firebase Authentication API
  };

  return (
    <View className='flex-1'>
      <View className='flex items-center'>
        <Text className='text-4xl font-bold mt-12'>Register</Text>
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
          className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg mb-4'
          onPress={handleSubmit}
        >
          <Text className='text-lg text-white'>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg'>
          <Text className='text-lg text-white'>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View className='flex items-center mt-6'>
        <Text className='text-lg'>Already have an account? </Text>
        <Text
          className='font-bold text-lg'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
