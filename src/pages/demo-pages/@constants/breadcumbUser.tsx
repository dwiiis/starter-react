import { webRoutes } from '@/routes/web';
import { BreadcrumbProps, Button } from 'antd';
import { Link } from 'react-router-dom';
import Icon, { ArrowLeftOutlined } from '@ant-design/icons';

export const BreadcumbUser = (darkMode: boolean) => {

  const breadcrumb: BreadcrumbProps = {
    items: [
      {
        key: webRoutes.dashboard,
        title: (
          <Link to={webRoutes.dashboard}>
            <Button
              className={`${
                darkMode ? 'bg-black' : 'bg-white'
              } text-primary scale-75`}
              shape="round"
              icon={<ArrowLeftOutlined />}
              size="small"
            />
            <i> Dashboard</i>
          </Link>
        ),
      },
      {
        key: webRoutes.users,
        title: (
          <Link to={webRoutes.demo}>
            <i className='text-primary'>Demo</i>
          </Link>
        ),
      },
    ],
  };

  return breadcrumb;
};
