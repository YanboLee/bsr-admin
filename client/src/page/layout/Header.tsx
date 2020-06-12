import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ILoginUser } from '@/model/loginUser';
import { StoreState } from '@/store/types';

import {
  Layout, Avatar, Menu, Dropdown, PageHeader
} from 'antd';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

export interface ILoginProps {
  loginUser: ILoginUser,
}

const headPicUrl = `https://crucio-image-beta.oss-cn-bei
jing.aliyuncs.com/zxcdveqZVGwemuaBCfVeJQ?x-oss-process=im
age/resize,w_120/format,jpeg`;

const HeaderLayout: FC<ILoginProps> = (props) => {
  const { Header } = Layout;
  const { loginUser } = props;
  return (
    <Router>
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
                  <Link to="/login">退出登录</Link>
                </Menu.Item>
              </Menu>
            )
          }
          placement="bottomCenter"
        >
          <div className="header-avatar">
            <Avatar src={headPicUrl} />
            <span>{loginUser.nick_name}</span>
          </div>
        </Dropdown>
      </Header>
    </Router>
  );
};

const mapStateToProps = (state: StoreState): { loginUser: ILoginUser } => ({
  loginUser: state.loginUser
});

export default connect(mapStateToProps)(HeaderLayout);
