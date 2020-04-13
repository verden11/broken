import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

type WelcomeScreenRouteProp = RouteProp<RootStackParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

export type Props = { route: WelcomeScreenRouteProp; navigation: WelcomeScreenNavigationProp };
