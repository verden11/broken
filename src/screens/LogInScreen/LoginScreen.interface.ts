import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation';
import { RouteProp } from '@react-navigation/native';

interface providerData {
  displayName: any;
  email: string;
  phoneNumber: any;
  photoURL: any;
  providerId: string;
  uid: string;
}

export interface IUser {
  displayName: any;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: { creationTime: number; lastSignInTime: number };
  phoneNumber: any;
  photoURL: any;
  providerData: [providerData];
  providerId: string;
  uid: string;
}

type LogInScreenRouteProp = RouteProp<RootStackParamList, 'LogIn'>;
type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LogIn'>;

export type Props = { route: LogInScreenRouteProp; navigation: LogInScreenNavigationProp };
