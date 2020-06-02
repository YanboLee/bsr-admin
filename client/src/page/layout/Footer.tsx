import React, { FC } from 'react';
import { Layout } from 'antd';

const FooterLayout: FC = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  );
};

export default FooterLayout;
