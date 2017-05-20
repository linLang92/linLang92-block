var num = 0;
export default {
	namespace:'article',
	state:{
		content:null,
		title:null,
		url:null,
		time:null
	},
	reducers:{
		save(state,{content,title,url,time}){
			return {...state,content,title,url,time};
		}
	},
	effects:{
		*update({},{call,put}){
			let {content,title,url,time} = JSON.parse(localStorage.a);
			yield put({
				type:'save',
				content,
				title,
				url,
				time
			})

		}
	},
	subscriptions:{
		setLocal(props){
			return {}
		}
	}
}