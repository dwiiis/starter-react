import { Button, Flex, Form, Input, message, Modal, Table } from 'antd';
import { useCreateUserMutation, useFetchDataUsersQuery } from './@api';
import { ColumnsTableUser } from './@constants/columnTableUser';
import { BreadcumbUser } from './@constants/breadcumbUser';
import BasePageContainer from '@/components/layout/PageContainer';
import { useSelector } from 'react-redux';
import { selectDarkMode } from '@/store/slices/toggleSlice';
import { BsFilter } from 'react-icons/bs';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const Users = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: 0,
    showSizeChanger: true,
  });
  const columns = ColumnsTableUser();
  const darkMode = useSelector(selectDarkMode);
  const breadcrumb = BreadcumbUser(darkMode);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    isLoading: isLoadningUsers,
    isFetching: isFetchingUsers,
    isSuccess: isSuccessUser,
    data: dataUsers,
    refetch: refetchUsers,
  } = useFetchDataUsersQuery({
    page: Number(pagination.current),
  });
  const [addUser, { isLoading }] = useCreateUserMutation();

  const handleTableChange = async (pagination: any, _filters: any) => {
    const { current, total } = pagination;

    setPagination((prevState: any) => ({ ...prevState, current }));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await addUser(values).unwrap();
      message.success('User added successfully');
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      message.error('Failed to add user');
      console.error('Error adding user:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <BasePageContainer breadcrumb={<></>} title="TEST API PAGE">
      <Flex className="w-full mb-4 mt-2" justify="space-between" align="center">
        <Button
          className="custom-btn-primary"
          icon={<PlusOutlined />}
          size="middle"
          onClick={showModal}
        >
          Add Data
        </Button>
      </Flex>
      <Table
        key={'tableUser'}
        rowKey={'id'}
        columns={columns}
        dataSource={dataUsers?.data}
        loading={isFetchingUsers}
        scroll={{ x: true }}
        pagination={{
          current: Number(dataUsers?.page),
          pageSize: Number(dataUsers?.per_page),
          total: Number(dataUsers?.total),
          showSizeChanger: true,
        }}
        onChange={handleTableChange}
      />

      {/* MODAL  */}
      <Modal
        title="Add User"
        open={isModalOpen}
        closeIcon={false}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            className="custom-btn-primary"
            onClick={handleOk}
            loading={isLoading}
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" name="userForm">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="job"
            label="Job"
            rules={[{ required: true, message: 'Please input your job!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </BasePageContainer>
  );
};

export default Users;
