import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth, db, doc, getDoc, signInWithEmailAndPassword } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  const handleLoginPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        getDoc(doc(db, 'users', uid)).then((docSnap) => {
          if (docSnap.exists()) {
            const user = docSnap.data();
            navigation.navigate('Dashboard', { user: user });
          } else {
            console.log('No such document');
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
          placeholder='Password'
          autoCapitalize='none'
          blurOnSubmit={true}
          secureTextEntry={true}
          clearTextOnFocus={true}
          returnKeyType='done'
          textContentType='password'
          onChangeText={(value) => setPassword(value)}
        />
        <TouchableOpacity
          onPress={handleLoginPress}
          className='items-center bg-blue-500 text-white py-3 px-6 rounded-lg mb-4'
        >
          <Text className='text-lg text-white'>Login</Text>
        </TouchableOpacity>
      </View>
      <View className='flex items-center mt-6'>
        <Text className='text-lg'>Forgot Password?</Text>
        <Text className='text-lg'>
          Don't have an account?
          <Text
            className='font-bold'
            onPress={() => navigation.navigate('Register')}
          >
            {' '}
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
