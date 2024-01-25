import { User } from '@/interfaces/models/user';
import { TableDropdown } from '@ant-design/pro-components';
import { Avatar, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Icon, { DeleteOutlined } from '@ant-design/icons';
import { CiCircleMore } from 'react-icons/ci';

enum ActionKey {
  DELETE = 'delete',
}
export const ColumnsTableUser = () => {
  const column: ColumnsType<any> = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      align: 'center',
      sorter: false,
      render: (_, row: User) =>
        row.avatar ? (
          <Avatar
            shape="circle"
            size="small"
            src={row.avatar
            }
          />
        ) : (
          <Avatar shape="circle" size="small">
            {row.first_name.charAt(0).toUpperCase()}
          </Avatar>
        ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      width: '400px',
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      render: (_, row: User) => `${row.first_name} ${row.last_name}`,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Action',
      align: 'center',
      key: 'option',
      fixed: 'right',
      render: (_, row: User, index: number) => [
        <TableDropdown
          key={`actionGroup_${index}`}
          menus={[
            {
              key: ActionKey.DELETE,
              name: (
                <Space>
                  <DeleteOutlined />
                  Delete
                </Space>
              ),
            },
          ]}
        >
          <Icon component={CiCircleMore} className="text-primary text-xl" />
        </TableDropdown>,
      ],
    },
  ];

  return column;
};
