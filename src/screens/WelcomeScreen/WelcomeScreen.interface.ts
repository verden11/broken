import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../../navigation';

type WelcomeScreenRouteProp = RouteProp<DrawerParamList, 'Welcome'>;
type WelcomeScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Welcome'>;

export type Props = { route: WelcomeScreenRouteProp; navigation: WelcomeScreenNavigationProp };
