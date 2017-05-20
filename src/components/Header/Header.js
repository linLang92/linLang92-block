import React,{Component} from 'react';
import {connect} from 'dva';
import style from './style.css'
import {Link} from 'dva/router'

class Header extends Component {
	constructor(props){
		super();
	}
	render(){
		return (
				<div className='c-Header'>
					<Link to='/'>{this.props.nickname}</Link>
				</div>
			)
	}
}

export default connect((store)=>{
	return {
		nickname:store.userInfo.nickname
	}
})(Header);