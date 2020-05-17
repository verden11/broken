import { createRef } from 'react';
import { DrawerActions } from '@react-navigation/native';

export const isMountedRef: React.MutableRefObject<any> = createRef();

export const navigationRef: React.MutableRefObject<any> = createRef();

export function toggleDrawer() {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(DrawerActions.toggleDrawer());
  }
}
