import React from 'react';
import { Row, Col } from 'antd';
import Utils from '../../utils/utils';
import './index.less';

type Iprops = {};

type IState = {
  userName: string;
  systemTime: string;
};

export default class Header extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      userName: '我是皮卡丘',
      systemTime: ''
    };
  }

  componentWillMount() {
    setInterval(() => {
      let systemTime = Utils.dateFormat(+new Date());
      this.setState({
        systemTime
      });
    }, 1000);
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>{ this.state.userName }</span>
            <a href="#">退出登录</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{ this.state.systemTime }</span>
            <span className="weather-detail">晴天</span>
          </Col>
        </Row>
      </div>
    );
  }
};
