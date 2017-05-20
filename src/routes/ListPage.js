import React, {
  Component
} from 'react';
import {
  Link,
  hashHistory
} from 'dva/router'
import {
  connect
} from 'dva';
import {
  Table
} from 'antd'
import styles from './ListPage.css';
import Header from '../components/Header/Header.js'

class ListPage extends Component {
  constructor({dispatch,list}){ // props <- store
    super();
    this.dispatch= dispatch;
    this.state = {
      items: [],
      columns: [{
        title: '文章',  
        dataIndex: 'name',
        key: 'name',
        render: (text,object) => {
          return <Link href='#/article'  onClick={()=>{this.toArticle(object)}}>{text}</Link>
        },
        width: "50%"
      },{
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        render: text => {
          return <Link onClick={this.toArticle}>{text}</Link>
        },
        width: "25%",
      },{
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width: "25%"
      }]
    };
  }
  initList(){
    if(this.props.list.length==0){
      this.dispatch({
        type:'listpage/get',
        page:1,
      });
    }
  }

  toArticle(object){
    object.title = object.name;
    localStorage.a = JSON.stringify(object)
   
  }
  componentWillMount(){
    this.initList();
  }

  render() {
    return (
      <div className='listpage'>
        <Header/>
        <Table indentSize={50} className='table'  loading={this.props.list.length==0} dataSource={this.props.list} columns={this.state.columns} />
      </div>
    );
  }
}

ListPage.propTypes = {};

function mapProps({listpage:{list,page,total}}){
  return {list,page,total}
}
export default connect(mapProps)(ListPage);