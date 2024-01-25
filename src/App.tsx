import { Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes/browserRouter';
import { ConfigProvider } from 'antd';
import { ConfigProviderProps } from 'antd/es/config-provider';
import { selectDarkMode, toggleDarkMode } from './store/slices/toggleSlice';
import { useSelector } from 'react-redux';
import { antdConfig } from './constants';
import { useEffect } from 'react';

function App() {
  const darkMode = useSelector(selectDarkMode);
  
  const themeConfig: ConfigProviderProps = antdConfig(darkMode);

  return (
    <ConfigProvider {...themeConfig}>
      <div className="fade-in">
        <RouterProvider router={browserRouter} />
        <Toaster />
      </div>
    </ConfigProvider>
  );
}

export default App;
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

