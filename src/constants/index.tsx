import { ConfigProviderProps } from 'antd/es/config-provider';
import enUSIntl from 'antd/locale/en_US';

export const antdConfig = (darkMode: Boolean) => {
  const config: ConfigProviderProps = {
    theme: {
      token: {
        colorBgLayout: darkMode ?'#000': '#e8e9ec',
        colorPrimary:  CONFIG.theme.accentColor,
      },
    },
    locale: enUSIntl,
  };

  return config;
};
