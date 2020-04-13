import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

type ListingsScreenRouteProp = RouteProp<RootStackParamList, 'Listings'>;
type ListingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Listings'>;

export type Props = { route: ListingsScreenRouteProp; navigation: ListingsScreenNavigationProp };
