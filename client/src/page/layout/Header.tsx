import React, { FC } from 'react';
import {
  Layout, Avatar, Menu, Dropdown, PageHeader
} from 'antd';

const headPicUrl = `https://crucio-image-beta.oss-cn-bei
jing.aliyuncs.com/zxcdveqZVGwemuaBCfVeJQ?x-oss-process=im
age/resize,w_120/format,jpeg`;

const HeaderLayout: FC = () => {
  const { Header } = Layout;

  const logout = () => {
    console.log('click log out');
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="header-content">
        <PageHeader
          className="site-page-header"
          title="Title"
          subTitle="This is a subtitle"
        />
      </div>
      <Dropdown
        overlay={
          (
            <Menu>
              <Menu.Item>
                <div onClick={logout}>
                  退出登录
                </div>
              </Menu.Item>
            </Menu>
          )
        }
        placement="bottomCenter"
      >
        <div className="header-avatar">
          <Avatar src={headPicUrl} />
          <span>昵称</span>
        </div>
      </Dropdown>
    </Header>
  );
};

export default HeaderLayout;
