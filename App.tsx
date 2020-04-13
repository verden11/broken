import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/navigation/RootStackNavigator';

function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
  App.whyDidYouRender = true;
}
export default App;
