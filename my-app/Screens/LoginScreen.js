import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Forgot Password?</Text>
        <Text style={styles.text}>
          Don't have an account?{' '}
          <Text style={{ fontWeight: 'bold' }}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;
