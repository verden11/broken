import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation';
import { RouteProp } from '@react-navigation/native';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

export type Props = { route: RegisterScreenRouteProp; navigation: RegisterScreenNavigationProp };
