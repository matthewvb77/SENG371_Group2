import 'dotenv/config';

export default {

	"expo": {
		"name": "my-app",
		"slug": "my-app",
		"version": "1.0.0",
		"orientation": "portrait",
		"icon": "./assets/icon.png",
		"userInterfaceStyle": "light",
		"splash": {
			"image": "./assets/splash.png",
			"resizeMode": "contain",
			"backgroundColor": "#ffffff"
		},
		"updates": {
			"fallbackToCacheTimeout": 0,
			"url": "https://u.expo.dev/88cef38a-1d1b-442e-8715-c717d989f5d2"
		},
		"assetBundlePatterns": ["**/*"],
		"ios": {
			"supportsTablet": true,
			"bundleIdentifier": "com.matthewvb77.myapp",
      "googleServicesFile": "./GoogleService-Info.plist"
		},
		"android": {
			"adaptiveIcon": {
				"foregroundImage": "./assets/adaptive-icon.png",
				"backgroundColor": "#FFFFFF"
			},
			"package": "com.matthewvb77.myapp",
      "googleServicesFile": "./google-services.json"
		},
		"web": {
			"favicon": "./assets/favicon.png"
		},
		"extra": {
			"eas": {
				"projectId": "88cef38a-1d1b-442e-8715-c717d989f5d2"
			},
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
		},
		"runtimeVersion": {
			"policy": "sdkVersion"
		},
    "scheme": "my-app"
	}
}
