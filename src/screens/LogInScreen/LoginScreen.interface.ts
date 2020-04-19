import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'src/navigation';
import { RouteProp } from '@react-navigation/native';

type LogInScreenRouteProp = RouteProp<RootStackParamList, 'LogIn'>;
type LogInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LogIn'>;

export type Props = { route: LogInScreenRouteProp; navigation: LogInScreenNavigationProp };
