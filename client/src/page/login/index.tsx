import React, { FC, useState } from 'react';
import {
  Form, Input, Button, Checkbox, Modal
} from 'antd';
import '@/style/login.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App: FC = () => {
  const [state, setState] = useState({
    visible: false
  });

  const doRegist = () => {
    setState({
      visible: true
    });
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleRegistCancel = () => {
    setState({
      visible: false
    });
  };

  const handleRegistOk = () => {
    setState({
      visible: false
    });
  };

  return (
    <div className="login-panel">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
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
        visible={state.visible}
        onOk={handleRegistOk}
        onCancel={handleRegistCancel}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
        >
          <Form.Item label="用户名">
            <Input />
          </Form.Item>
          <Form.Item label="密码">
            <Input />
          </Form.Item>
          <Form.Item label="手机号">
            <Input />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item label="昵称">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
