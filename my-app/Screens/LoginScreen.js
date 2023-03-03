import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";
import { auth, db, doc, getDoc, signInWithEmailAndPassword } from "../firebase";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [token, setToken] = useState("");
	const [userInfo, setUserInfo] = useState(null);

	const [request, response, promptAsync] = Google.useAuthRequest({
		androidClientId:
			"162824721551-9u964a98m0uk5pl7jjf8b3nfjg3ut4ut.apps.googleusercontent.com",
		iosClientId:
			"162824721551-inb5r4haq77q7k5rf7a2acorgppbv951.apps.googleusercontent.com",
		expoClientId:
			"162824721551-9u964a98m0uk5pl7jjf8b3nfjg3ut4ut.apps.googleusercontent.com",
	});

<<<<<<< HEAD
	useEffect(() => {
		if (response?.type === "success") {
			setToken(response.authentication.accessToken);
			getUserInfo();
		}
	}, [response, token]);

	const getUserInfo = async () => {
		try {
			const response = await fetch(
				"https://www.googleapis.com/userinfo/v2/me",
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			console.log("here");
			const user = await response.json();
			setUserInfo(user);
		} catch (error) {
			console.log(error);
		}
	};

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
		let result = await WebBrowser.openBrowserAsync(
			"https://accounts.google.com/gsi/client"
		);
		console.log(result);

		// // sign into firebase with google
		// signInWithPopup(auth, provider)
		//   .then((result) => {
		//     // get the user
		//     const user = result.user;
		//     // check if the user exists in the firestore
		//     getDoc(doc(db, "users", user.uid)).then((docSnap) => {
		//       if (docSnap.exists()) {
		//         // if the user exists, navigate to the dashboard
		//         navigation.navigate("Dashboard", { user: user });
		//       } else {
		//         // if the user doesn't exist, create the user in the firestore and navigate to the dashboard
		//         const data = {
		//           uid: user.uid,
		//           email: user.email,
		//           displayName: user.displayName,
		//           photoURL: user.photoURL,
		//         };
		//         setDoc(doc(db, "users", user.uid), data)
		//           .then(navigation.navigate("Dashboard", { user: data }))
		//           .catch((error) => {
		//             alert(error);
		//           });
		//       }
		//     });
		//   })
		//   .catch((error) => {
		//     alert(error);
		//   });
	};

	return (
		<View className="flex-1 pt-10">
			<View className="flex items-center">
				<Text className="text-4xl font-bold mt-12">Login</Text>
			</View>
			<View className="mt-12 px-5">
				<TextInput
					className="h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4"
					placeholder="Email"
					autoCapitalize="none"
					blurOnSubmit={true}
					inputMode="email"
					keyboardType="email-address"
					returnKeyType="next"
					textContentType="emailAddress"
					onChangeText={(value) => setEmail(value)}
				/>
				<TextInput
					className="h-12 px-4 bg-gray-100 border border-gray-500 rounded-lg mb-4"
					placeholder="Password"
					autoCapitalize="none"
					blurOnSubmit={true}
					secureTextEntry={true}
					clearTextOnFocus={true}
					returnKeyType="done"
					textContentType="password"
					onChangeText={(value) => setPassword(value)}
				/>
				<TouchableOpacity
					onPress={handleLoginPress}
					className="items-center bg-blue-500 text-white py-3 px-6 rounded-lg mb-4"
				>
					<Text className="text-lg text-white">Login</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => promptAsync()}
					className="items-center justify-center flex flex-row space-x-5 bg-gray-700 py-3 px-6 rounded-lg"
				>
					<Image
						className="h-6 w-6"
						source={{
							uri: "https://i.ibb.co/j82DCcR/search.png",
						}}
					/>
					<Text className="text-lg text-white">Sign in with Google</Text>
				</TouchableOpacity>
			</View>
			<View className="flex items-center mt-6">
				<Text className="text-lg">Forgot Password?</Text>
				<Text className="text-lg">
					Don't have an account?
					<Text
						className="font-bold"
						onPress={() => navigation.navigate("Register")}
					>
						{" "}
						Sign Up
					</Text>
				</Text>
			</View>
		</View>
	);
=======
  const handleGoogleLoginPress = () => {
    // TODO
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
>>>>>>> e62ec46 (style google sign in button)
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 50,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
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
