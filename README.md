# Cordova-Ionic-Angular-WP-API-WITravel
This project fetches posts on Wordpress API With Authentication Login Connected to Firebase Auth

## Installation
Run the following command to setup the App:

Open a CLI and run `npm install`

Run this command if Ionic-cli is not installed
```
npm install -g @ionic/cli
```

Setup Firebase Connection on `app.module.ts`

```js
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
```

Add Wordpress URL on `src/config.ts`

```
export const WORDPRESS_URL = '';
```


### Usage

Run the build command to deploy Android/IOS:
```
ionic build
```

Run the App
```
ionic serve
```

### Release
Released APK is located on directory:
```
platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

## Notes

-APK is not signed with google
-Platform Android only