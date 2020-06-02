import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import siderConfig from './sider-config';

const Siders = () => {
  const [state, setState] = useState({
    collapsed: false,
  });
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  const onCollapse = (collapsed: any): void => {
    setState({ collapsed });
  };

  const menuClick = (
    {
      item, key, keyPath, domEvent,
    }: any
  ): void => {
    console.log(item, key, keyPath, domEvent);
    window.location.href = keyPath;
  };

  const makeSider = () => {
    const siderBarMenu = [];
    const privilSider = siderConfig.filter(() => true);

    const getMenuItemList = (item: any) => (
      <Menu.Item key={item.path} icon={item.icon}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    );

    siderBarMenu.push(privilSider.map((item: any) => {
      if (item.children && item.children.length > 0) {
        const childrenList = item.children.map((it: any) => getMenuItemList(it));
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {childrenList}
          </SubMenu>
        );
      }
      return getMenuItemList(item);
    }));
    return siderBarMenu;
  };

  return (
    <Router>
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['app']} mode="inline" onClick={menuClick}>
          {
            makeSider()
          }
        </Menu>
      </Sider>
    </Router>
  );
};

export default Siders;
