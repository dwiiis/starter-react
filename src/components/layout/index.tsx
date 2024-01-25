import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '@/routes/web';
import { Alert, Avatar, Button, Dropdown, Input } from 'antd';
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import Icon, {
  LogoutOutlined,
  GithubFilled,
  InfoCircleFilled,
  SearchOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/adminSlice';
import { memo, useEffect, useState } from 'react';
import { sidebar } from './sidebar';
import { apiRoutes } from '@/routes/api';
import { handleErrorResponse } from '@/utils';
import { RiShieldUserFill } from 'react-icons/ri';
import api from '@/utils/@api/api';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { selectDarkMode, toggleDarkMode } from '@/store/slices/toggleSlice';
import { IoIosLogOut } from 'react-icons/io';
import { TbLogout } from 'react-icons/tb';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkModeBtn = (checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('darkMode', checked.toString());
    dispatch(toggleDarkMode());
  };

  const defaultProps: ProLayoutProps = {
    title: CONFIG.appName,
    logo: '/vite.png',
    fixedHeader: true,
    fixSiderbar: true,
    layout: CONFIG.theme.sidebarLayout,
    route: {
      routes: sidebar,
    },
    navTheme: isDarkMode ? 'realDark' : 'light',
    theme: isDarkMode ? 'dark' : 'light',
  };

  const logoutAdmin = () => {
    dispatch(logout());
    navigate(webRoutes.login, {
      replace: true,
    });
    localStorage.removeItem('darkMode');
    dispatch(toggleDarkMode());

    api.post(apiRoutes.logout).catch((error) => {
      handleErrorResponse(error);
    });
  };

  const avatar = (
    <div
      className={
        isDarkMode
          ? 'border-r-2 border-gray-600 pr-2'
          : 'border-r-2 border-gray-200 pr-2'
      }
    >
      <Button type="primary" shape="circle">
        AS
      </Button>
    </div>
  );
  const iconLogout = isDarkMode ? (
    <Button
      type="primary"
      shape="circle"
      icon={<TbLogout />}
      className="bg-gray-500 text-white"
    />
  ) : (
    <Button
      type="primary"
      shape="circle"
      icon={<TbLogout />}
      className="bg-blue-100 text-blue-600"
    />
  );
  const switchDark = (
    <>
      <div className="flex items-center w-full pr-6 pl-6">
        <p className="text-sm w-5/6">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>

        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkModeBtn}
          sunColor="#959595"
          moonColor="#959595"
          size={20}
        />
      </div>
    </>
  );

  return (
    <div className="h-screen">
      <ProLayout
        {...defaultProps}
        token={{
          colorPrimary: '#000',
          sider: {
            colorMenuBackground: isDarkMode ? 'black' : 'white',
          },
        }}
        location={location}
        onMenuHeaderClick={() => navigate(webRoutes.dashboard)}
        menuItemRender={(item, dom) => (
          <a
            onClick={(e) => {
              e.preventDefault();
              item.path && navigate(item.path);
            }}
            href={item.path}
          >
            {dom}
          </a>
        )}
        avatarProps={{
          icon: <Icon component={RiShieldUserFill} />,
          className: 'bg-primary bg-opacity-20 text-primary text-opacity-90',
          size: 'small',
          shape: 'square',
          title: 'Admin',
          render: (_, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: 'Logout',
                      onClick: () => {
                        logoutAdmin();
                      },
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            );
          },
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return <div>{switchDark}</div>;
        }}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default memo(Layout);
