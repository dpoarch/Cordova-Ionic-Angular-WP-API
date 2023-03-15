# Cordova-Ionic-Angular-WP-API
This project has a json posts on Wordpress API With Authentication Login Connected to Firebase Auth.

## Installation
Run the following command to setup the App:

Open a CLI and run `npm install`

Run this command if Ionic-cli is not installed
```
npm install -g @ionic/cli
```

Setup the Firebase connection on `src/config.ts`
```ts
export const FirebaseConfiguration = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
}
```

Add Wordpress URL on `src/config.ts`
```ts
export const WORDPRESS_URL = '';
```


### Usage

Run the following command to start Ionic:
```bash
ionic serve
```

Run the following command to add platform Android:
```bash
ionic cordova platform add android
```

### Deploy
Run build command to deploy Android/IOS:
```bash
ionic build
```

Released APK is located on directory:
```bash
platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

## Notes

-APK is not signed with google
-Platform Android only
