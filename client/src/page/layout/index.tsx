import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';

import 'normalize.css';
import '@/style/index.scss';
import '@/style/layout.scss';

import Sider from '@/page/layout/Sider';
import Header from '@/page/layout/Header';
import Footer from '@/page/layout/Footer';


const PageLayout: FC = (props) => {
  const { children } = props;
  const { Content } = Layout;
  const click = () => {
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item onClick={click}>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;
