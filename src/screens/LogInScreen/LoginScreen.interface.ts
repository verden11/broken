import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from 'src/navigation';
import { RouteProp } from '@react-navigation/native';

type LogInScreenRouteProp = RouteProp<DrawerParamList, 'LogIn'>;
type LogInScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'LogIn'>;

export type Props = { route: LogInScreenRouteProp; navigation: LogInScreenNavigationProp };
