// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false,
//   apiProtocol: 'http',
//   apiServer: '3.12.55.54',
//   apiPath: 'api',
//   apiPort: 80,
// };
export const environment = {
  production: false,
  apiProtocol: 'https',
  apiServer: 'localhost',
  apiPath: 'api',
  apiPort: 44366,
  firebaseConfig: {
    apiKey: 'AIzaSyDTe7v3SzkXpwVokjaP4oqLCPSeayzYDj8',
    authDomain: 'geotextil-76e41.firebaseapp.com',
    databaseURL: 'https://geotextil-76e41.firebaseio.com',
    projectId: 'geotextil-76e41',
    storageBucket: 'geotextil-76e41.appspot.com',
    messagingSenderId: '1047494190122',
    appId: '1:1047494190122:web:fa1c80741d4f2ea216cf53'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
