# Cordova-Ionic-Angular-WP-API-WITravel
This project has a json posts on Wordpress API With Authentication Login Connected to Firebase Auth.

## Installation
Run the following command to setup the App:

Open a CLI and run `npm install`

Run this command if Ionic-cli is not installed
```
npm install -g @ionic/cli
```

Setup the Firebase connection on `app.module.ts`
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

Paste Wordpress URL on `src/config.ts`
```
export const WORDPRESS_URL = '';
```


### Usage

Run the following command to start Ionic:
```
ionic serve
```

### Deploy
Run build command to deploy Android/IOS:
```
ionic build
```

Released APK is located on directory:
```
platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

## Notes

-APK is not signed with google
-Platform Android only
