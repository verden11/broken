import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import AuthProvider from './src/context/AuthContext';
import { navigationRef, isMountedRef } from './RootNavigation';

function App() {
  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}

if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
  App.whyDidYouRender = true;
}
export default App;
