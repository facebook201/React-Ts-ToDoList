import React from 'react';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import { Row, Col } from 'antd';

import './common.less';

class Admin extends React.Component {

  render() {
    return (
      <Row className="conatiner">
        <Col span={4} className="nav-left">
          <NavLeft />
        </Col>
        <Col span={20} className="main">
          <Header />
          <Row className="content">
            content
          </Row>
          <Footer />
        </Col>
      </Row> 
    );
  }
}

export default Admin;
