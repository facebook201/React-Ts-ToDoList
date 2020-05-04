import React from 'react';
import { Menu, Icon, Button } from 'antd';
import classNames from 'classnames';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import MenuConfig from '../../config/menuConfig';
import './index.less';
import { MenuItem, MenuList } from 'src/config/menuConfig';

const { SubMenu } = Menu;

interface IState {
  collapsed: boolean;
  menuTreeNode: MenuItem[];
};

export default class NavLeft extends React.Component<{}, IState> {
  static state = {
    collapsed: false,
    menuTreeNode: []
  };

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  };

  // 收起来
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // 菜单渲染
  renderMenu = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <SubMenu title={<span>{ <Icon type="logout" /> } {item.title}</span>} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item title={item.title} key={item.key}>
            <Icon type="logout" />
            { item.title }
          </Menu.Item>
        );
      }
    });
  };

  render() {
    const classLogo = classNames('logo');
    return (
      <div>
        <div className={classLogo}>
          <img className="nav-img" src="/assets/logo-ant.svg" alt="" />
          <p className="title">React & TS</p>
        </div>
        <Menu theme="dark" mode="inline" inlineCollapsed={this.state.collapsed}>
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}
