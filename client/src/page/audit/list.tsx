/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect } from 'react';
import {
  Table, Space, message, Modal
} from 'antd';
// import { useHistory } from 'react-router-dom';
import { verifyList } from '@/lib/apis';
import { connect } from 'react-redux';
import { ILoginUser } from '@/model/loginUser';
import { StoreState } from '@/store/types';

const columns = [
  {
    title: '申请人',
    dataIndex: 'postId',
    key: 'postId'
  },
  {
    title: '类别',
    dataIndex: 'message',
    key: 'message'
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '审批人',
    dataIndex: 'recieveId',
    key: 'recieveId'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>accept</a>
        <a>reject</a>
      </Space>
    ),
  },
];

interface pageState {
  list: []
}

export interface ILoginProps {
  loginUser: ILoginUser,
}

const App: FC<ILoginProps> = (props) => {
  // const history = useHistory();
  const { loginUser } = props;
  const defaultData: pageState = {
    list: [],
  };
  const [data, setData] = useState(defaultData);
  const [visible, setVisible] = useState(false);

  const getList = async () => {
    try {
      const res = await verifyList({
        userId: loginUser.mobile
      });
      setData({ list: res.data.data });
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  const rowClick = (event: any, record: any) => {
    console.log(event, record);
    setVisible(true);
  };

  const handleRegistCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data.list}
        rowKey="id"
        onRow={(record) => ({
          onClick: (event) => {
            rowClick(event, record);
          }, // 点击行
        })}
      />
      <Modal
        title="Audit"
        visible={visible}
        onCancel={handleRegistCancel}
      />
    </div>
  );
};

const mapStateToProps = (state: StoreState): { loginUser: ILoginUser } => ({
  loginUser: state.loginUser
});

export default connect(mapStateToProps)(App);
