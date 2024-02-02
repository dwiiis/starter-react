import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { webRoutes } from '@/routes/web';
import { Alert, Avatar, Button, Dropdown, Input } from 'antd';
import { ProLayout, ProLayoutProps } from '@ant-design/pro-components';
import Icon, { LogoutOutlined } from '@ant-design/icons';
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
    <Button type="primary" shape="circle">
      AS
    </Button>
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
        actionsRender={(props) => {
          if (props.isMobile) return [];
          if (typeof window === 'undefined') return [];
          return [
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkModeBtn}
              sunColor="#ffe100"
              moonColor="#504f8f"
              size={34}
            />,
          ];
        }}
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
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default memo(Layout);
