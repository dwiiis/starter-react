import { Button, Flex, Input, Table } from 'antd';
import { useFetchDataUsersQuery } from './@api';
import { ColumnsTableUser } from './@constants/columnTableUser';
import { BreadcumbUser } from './@constants/breadcumbUser';
import BasePageContainer from '@/components/layout/PageContainer';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '@/store/slices/toggleSlice';
import { BsFilter } from 'react-icons/bs';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

const Users = () => {
  const {
    isLoading: isLoadningUsers,
    isFetching: isFetchingUsers,
    isSuccess: isSuccessUser,
    data: dataUsers,
    refetch: refetchUsers,
  } = useFetchDataUsersQuery({});

  const columns = ColumnsTableUser();

  const darkMode = useSelector(selectDarkMode);

  const breadcrumb = BreadcumbUser(darkMode);

  return (
    <BasePageContainer breadcrumb={breadcrumb} title="DEMO PAGE">
      <Flex className="w-full mb-4 mt-2" justify="space-between" align="center">
        <Flex className="w-1/3 " justify="space-between" align="center">
          <Button
            className="custom-btn-primary"
            icon={<BsFilter />}
            size="middle"
          >
            Filter
          </Button>

          <Input
            className="mr-2 ml-2"
            placeholder="Type here"
            prefix={<SearchOutlined className="text-primary" />}
          />
        </Flex>
        <Button
          className="custom-btn-primary"
          icon={<PlusOutlined />}
          size="middle"
        >
          Add Data
        </Button>
      </Flex>
      <Table
        key={'tableUser'}
        columns={columns}
        dataSource={dataUsers?.data}
        loading={isLoadningUsers}
        scroll={{ x: true }}
        pagination={{ position: ['bottomRight'] }}
      />
    </BasePageContainer>
  );
};

export default Users;
