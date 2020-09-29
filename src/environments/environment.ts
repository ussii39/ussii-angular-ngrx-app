// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase/app';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDD_HZl5UTwFd0Hfq0CfmCOkXUEbJ6dIJs',
    authDomain: 'angular-chat-ccc7b.firebaseapp.com',
    databaseURL: 'https://angular-chat-ccc7b.firebaseio.com',
    projectId: 'angular-chat-ccc7b',
    storageBucket: 'angular-chat-ccc7b.appspot.com',
    messagingSenderId: '330768712719',
    appId: '1:330768712719:web:81745eaa2e48de772b8f7a',
    measurementId: 'G-6DY6MXE26D',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
