import { webRoutes } from '../../routes/web';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsDiagram3 } from 'react-icons/bs';
import Icon, {
  UserOutlined,
  InfoCircleOutlined,
  PartitionOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { AiOutlineShopping } from 'react-icons/ai';
import { IoBagCheckOutline } from 'react-icons/io5';
import { BiTimeFive } from 'react-icons/bi';
import { IoTimerOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';

export const sidebar = [
  {
    path: webRoutes.dashboard,
    key: webRoutes.dashboard,
    name: 'Dashboard',
    icon: <Icon component={BiHomeAlt2} />,
  },  
  {
    path: webRoutes.demo,
    key: webRoutes.demo,
    name: 'Demo Page',
    icon: <InfoCircleOutlined />,
  },
];
