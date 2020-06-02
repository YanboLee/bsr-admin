/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import PageLayout from '@/page/layout/index';
import {
  Button, Table, Tag, Space
} from 'antd';
import { getListTest } from '@/lib/apis';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: any[]) => (
      <>
        {tags.map((tag: string) => {
          let color = tag && tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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
  const defaultData: pageState = {
    list: [],
  };
  const [data, setData] = useState(defaultData);
  const getTest = async () => {
    try {
      const res = await getListTest();
      setData({
        list: res.data.data
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PageLayout>
      <div>
        <Button type="primary" onClick={getTest}>Button</Button>
        <Table columns={columns} dataSource={data.list} />
      </div>
    </PageLayout>
  );
};

export default App;
