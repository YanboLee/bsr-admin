/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect } from 'react';
import {
  Button, Table, Space, message
} from 'antd';
import { useHistory } from 'react-router-dom';
import { memberList } from '@/lib/apis';

const columns = [
  {
    title: '编号',
    dataIndex: 'work_no',
    key: 'work_no',
  },
  {
    title: '真实姓名',
    dataIndex: 'real_name',
    key: 'real_name'
  },
  {
    title: '职务',
    dataIndex: 'team_duty',
    key: 'team_duty',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: { name: React.ReactNode; }) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

interface pageState {
  list: []
}

const App: FC = () => {
  const history = useHistory();
  const defaultData: pageState = {
    list: [],
  };
  const [data, setData] = useState(defaultData);

  const create = () => {
    history.push('/member/create');
  };

  const getList = async (values?: any) => {
    try {
      const res = await memberList(values);
      setData({ list: res.data.data });
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Button type="primary" onClick={create}>create</Button>
      <Table columns={columns} dataSource={data.list} rowKey="mobile" />
    </div>
  );
};

export default App;
