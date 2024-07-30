import { User } from '@/interfaces/models/user';
import { TableDropdown } from '@ant-design/pro-components';
import { Avatar, message, Space } from 'antd';
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
          <Avatar shape="circle" size="default" src={row.avatar} />
        ) : (
          <Avatar shape="circle" size="small">
            {row.first_name.charAt(0).toUpperCase()}
          </Avatar>
        ),
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      width: '400px'
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      width: '400px'
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      sorter: false,
      align: 'center',
      ellipsis: true,
      width: '400px',
      render: (_, row: User) => {
        const lastE = row?.first_name?.slice(-1);
        if (lastE === 'e') {
          return (
            <span className="bg-red-400">
              {row.first_name} {row.last_name}
            </span>
          );
        } else {
          return (
            <span>
              {row.first_name} {row.last_name}
            </span>
          );
        }
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      sorter: false,
      width: '200',
      align: 'center',
      ellipsis: true,
    },
    // {
    //   title: 'Action',
    //   align: 'center',
    //   key: 'option',
    //   fixed: 'right',
    //   render: (_, row: User, index: number) => [
    //     <TableDropdown
    //       key={`actionGroup_${index}`}
    //       menus={[
    //         {
    //           key: ActionKey.DELETE,
    //           name: (
    //             <Space>
    //               <DeleteOutlined />
    //               Delete
    //             </Space>
    //           ),
    //         },
    //       ]}
    //     >
    //       <Icon component={CiCircleMore} className="text-primary text-xl" />
    //     </TableDropdown>,
    //   ],
    // },
  ];

  return column;
};
