import React, {
  Component
} from 'react';
import {
  connect
} from 'dva';
import {
  Link
} from 'dva/router'
import styles from './IndexPage.css';
import {
  Col,
  Row
} from 'antd';
import Header from '../components/Header/Header.js'
class IndexPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className='indexPage'>
        <Header/>
        <div className='avatar'>
            <div className='photo'></div>
            <span>{this.props.nickname}</span>
            <Row className='row'>
              <Col className='col' span={12}>
                <Link to='/list'>文章</Link>
              </Col>
              <Col className='col' span={12}>
                <Link to='/test'>工作文档</Link>
              </Col>
            </Row>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default connect(store=>{
  return {
    nickname:store.userInfo.nickname
  }
})(IndexPage);