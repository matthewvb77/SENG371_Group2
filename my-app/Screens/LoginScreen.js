import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  auth,
  db,
  doc,
  getDoc,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "../firebase";
import * as WebBrowser from "expo-web-browser";
import * as Crypto from "expo-crypto";
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectUri = makeRedirectUri({ useProxy: true });

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId:
        "162824721551-inb5r4haq77q7k5rf7a2acorgppbv951.apps.googleusercontent.com",
      scopes: ["openid", "profile", "email"],
      redirectUri: redirectUri,
      codeVerifier: "",
    },
    {
      authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
      tokenEndpoint: "https://oauth2.googleapis.com/token",
      revocationEndpoint: "https://oauth2.googleapis.com/revoke",
    }
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;

      const credential = auth.GoogleAuthProvider.credential(access_token);

      auth
        .signInWithCredential(credential)
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
    }
  }, [response]);

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

  const handleGoogleLoginPress = async () => {
    const state = await Crypto.getRandomBytesAsync(6).then((bytes) => {
      return bytes.reduce(
        (str, byte) => str + byte.toString(16).padStart(2, "0"),
        ""
      );
    });

    const authUrl = `${request.url}&state=${state}`;

    promptAsync({ authUrl });
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
          onPress={handleGoogleLoginPress}
          className='items-center justify-center flex flex-row space-x-5 bg-gray-700 py-3 px-6 rounded-lg'
        >
          <Image
            className='h-6 w-6'
            source={{
              uri: "https://i.ibb.co/j82DCcR/search.png",
            }}
          />
          <Text className='text-lg text-white'>Sign in with Google</Text>
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
