import React from 'react';
import {
	Router
} from 'dva/router';
//缓存处理
const cache = {};

function registerModel(app, model) {
	//添加到redux
	if (!cache[model.namespace]) {
		app.model(model);
		cache[model.namespace] = 1;
	}
}

function RouterConfig({
	history,
	app
}) {
	if(!cache.userInfo){
		registerModel(app, require('./models/userinfo'))
	}
	var routes = [{
		path: '/',
		name: 'IndexPage',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./routes/IndexPage'));
			})
		}
	},{
		path: '/list',
		name: 'ListPage',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				registerModel(app, require('./models/listPage'))
				cb(null, require('./routes/ListPage'))
			})
		}
	},
	{
		path:'/article',
		name:'article',
		getComponent(nextState,cb){
			require.ensure([],(require)=>{
				registerModel(app, require('./models/article'))
				cb(null,require('./routes/article/article.js'))
			})
		}
	}, 
	{
		path: '/test',
		name: 'test',
		getComponent(nextState, cb) {
			require.ensure([], (require) => {
				cb(null, require('./routes/antdDesign/index.jsx'))
			})
		}
	}];
	return (
		<Router history={history} routes={routes} ></Router>
	);
}

export default RouterConfig;