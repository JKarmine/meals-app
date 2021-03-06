import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  void (async () => {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
    setFontsLoaded(true);
  })();

  if (!fontsLoaded) {
    return <AppLoading onError={(err) => console.log(err)} />;
  }

  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
