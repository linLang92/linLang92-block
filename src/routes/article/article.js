import React,{Component} from 'react';
import {connect} from 'dva';
import style from './style.css'

import Header from '../../components/Header/Header.js'
const marked = require('marked');
const hljs = require('highlight.js');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	highlight: code => hljs.highlightAuto(code).value
});
class Article extends Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		this.props.dispatch({
			type:'article/update'
		})
	}
	computDom(){
		let {title,content,url,time} = this.props.article;
		if(content) content = marked(content);
		return (
			<div className='article'>
				<p className='title'>{title}</p>
				<p className='time'>{time}</p>
				<p className='url'>原文地址：<a href={url}>{url}</a></p>
				<div dangerouslySetInnerHTML={{__html:content}}></div>
			</div>
				
			)
	}
	render(){
		let tmp;
		return (
			<div>
				<Header/>
			{this.computDom()}
			</div>
		)
	}
}


export default connect((store)=>{
	return store
})(Article)