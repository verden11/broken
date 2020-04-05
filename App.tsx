import React from 'react';
import { SafeAreaView } from 'react-native';
import SignIn from './src/components/SignIn';

function App() {
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
}

if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
  App.whyDidYouRender = true;
}
export default App;
