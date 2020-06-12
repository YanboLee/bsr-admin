import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { setlogin } from '@/store/login/action';
import { ILoginUser } from '@/model/loginUser';
import { StoreState } from '@/store/types';

import {
  Form, Input, Button, Modal, message
} from 'antd';
import '@/style/login.scss';
import { regist, login } from '@/lib/apis';

interface IRegistData {
  [index: string]: any;
}

export interface ILoginProps {
  loginUser: ILoginUser,
  doSetlogin: (data: ILoginUser) => void,
  doClearlogin: () => void
}
const defaultRegistData: IRegistData = {
  password: '',
  mobile: '',
  email: '',
  nick_name: ''
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: FC<ILoginProps> = (props) => {
  const history = useHistory();
  const [loginForm] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [registData, setRegistData] = useState(defaultRegistData);

  const { doSetlogin } = props;

  const doRegist = () => {
    setVisible(true);
  };

  const onFinish = async (values: any) => {
    try {
      const res = await login(values);
      message.info(res.data.message);
      doSetlogin(res.data.data);
      history.push('/home');
    } catch (error) {
      message.error(error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleRegistCancel = () => {
    setVisible(false);
  };

  const handleRegistOk = async () => {
    try {
      const res = await regist(registData);
      message.info(res.data.message);
    } catch (error) {
      message.error(error.message);
    }
    setVisible(false);
  };

  const handleRegistDataChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setRegistData({
      ...registData,
      [name]: e.target.value
    });
  };
  return (
    <div className="login-panel">
      <Form
        {...layout}
        form={loginForm}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={doRegist}>
            Regist
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Regist"
        visible={visible}
        onOk={handleRegistOk}
        onCancel={handleRegistCancel}
      >
        <div>
          <span>手机号</span>
          <Input
            value={registData.mobile}
            onChange={(e) => handleRegistDataChange(e, 'mobile')}
          />
        </div>
        <div>
          <span>密码</span>
          <Input
            value={registData.password}
            onChange={(e) => handleRegistDataChange(e, 'password')}
          />
        </div>
        <div>
          <span>邮箱</span>
          <Input
            value={registData.email}
            onChange={(e) => handleRegistDataChange(e, 'email')}
          />
        </div>
        <div>
          <span>昵称</span>
          <Input
            value={registData.nick_name}
            onChange={(e) => handleRegistDataChange(e, 'nick_name')}
          />
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { loginUser: ILoginUser } => ({
  loginUser: state.loginUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  doSetlogin: (data: ILoginUser) => dispatch(setlogin(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
