import auth from '@react-native-firebase/auth';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IUser } from './AuthContext.interface';

export const AuthContext = React.createContext<any>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isAuth, setAuth] = useState<boolean>(false);

  const onAuthStateChanged = useCallback(
    usr => {
      setUser(usr);
      setAuth(!!usr);
      if (isLoading) setLoading(false);
    },
    [isLoading]
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  const authContext = useMemo(
    () => ({
      signIn: async (email: string, password: string) => {
        if (email && password) return auth().signInWithEmailAndPassword(email.trim(), password);
      },
      signOut: async () => {
        setLoading(true);
        await auth().signOut();
        setLoading(false);
      },
      signUp: async (email: string, password: string) => {
        return auth().createUserWithEmailAndPassword(email, password);
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ authContext, isAuth, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
