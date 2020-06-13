/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, useEffect } from 'react';
import {
  Table, message
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

  const getList = async () => {
    try {
      const res = await verifyList({
        userId: loginUser.mobile
      });
      setData({ list: res.data.data });
      console.log(data);
      console.log(data);
    } catch (error) {
      message.error(error.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Table columns={columns} dataSource={data.list} rowKey="id" />
    </div>
  );
};

const mapStateToProps = (state: StoreState): { loginUser: ILoginUser } => ({
  loginUser: state.loginUser
});

export default connect(mapStateToProps)(App);
