import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from 'src/navigation';
import { RouteProp } from '@react-navigation/native';

type RegisterScreenRouteProp = RouteProp<DrawerParamList, 'Register'>;
type RegisterScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Register'>;

export type Props = { route: RegisterScreenRouteProp; navigation: RegisterScreenNavigationProp };
