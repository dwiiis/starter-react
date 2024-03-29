import { useEffect, useState } from 'react';
import BasePageContainer from '../layout/PageContainer';
import { BreadcrumbProps, Card, Col, Progress, Row } from 'antd';
import { webRoutes } from '../../routes/web';
import { Link } from 'react-router-dom';
import StatCard from './StatCard';
import { AiOutlineStar, AiOutlineTeam } from 'react-icons/ai';
import Icon from '@ant-design/icons';
import { BiCommentDetail, BiPhotoAlbum } from 'react-icons/bi';
import { MdOutlineArticle, MdOutlinePhoto } from 'react-icons/md';
import { StatisticCard } from '@ant-design/pro-components';

const breadcrumb: BreadcrumbProps = {
  items: [
    {
      key: webRoutes.dashboard,
      title: <Link to={webRoutes.dashboard}>Dashboard</Link>,
    },
  ],
};

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <BasePageContainer breadcrumb={breadcrumb} transparent={true}>
      <Row gutter={24}>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={AiOutlineTeam} />}
            title="Users"
            number={12}
          />
        </Col>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={MdOutlineArticle} />}
            title="Posts"
            number={100}
          />
        </Col>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={BiPhotoAlbum} />}
            title="Albums"
            number={100}
          />
        </Col>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={MdOutlinePhoto} />}
            title="Photos"
            number={500}
          />
        </Col>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={BiCommentDetail} />}
            title="Comments"
            number={500}
          />
        </Col>
        <Col xl={6} lg={6} md={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
          <StatCard
            loading={loading}
            icon={<Icon component={AiOutlineStar} />}
            title="Reviews"
            number={100}
          />
        </Col>
        <Col
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          style={{ marginBottom: 24 }}
        >
          <Card bordered={false} className="w-full h-full cursor-default">
            <StatisticCard.Group direction="row">
              <StatisticCard
                statistic={{
                  title: 'XYZ',
                  value: loading ? 0 : 123,
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'Progress',
                  value: 'ABC',
                }}
                chart={
                  <Progress
                    className="text-primary"
                    percent={loading ? 0 : 75}
                    type="circle"
                    size={'small'}
                    strokeColor={CONFIG.theme.accentColor}
                  />
                }
                chartPlacement="left"
              />
            </StatisticCard.Group>
          </Card>
        </Col>
      </Row>
    </BasePageContainer>
  );
};

export default Dashboard;
