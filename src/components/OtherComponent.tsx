import React from 'react';
import { Text } from 'react-native';

function OtherComponent(props) {
  return <Text>{JSON.stringify(props)}</Text>;
}

if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
  OtherComponent.whyDidYouRender = true;
}

export default React.memo(OtherComponent);
