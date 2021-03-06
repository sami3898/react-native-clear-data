import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-clear-data' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const ClearData = NativeModules.ClearData
  ? NativeModules.ClearData
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

// Calling Native module
export function clearAppData() {
  return ClearData.clearAppData();
}
