import {getList} from '../services/listPage.js';
var num=null;
export default {
	namespace:'listpage',
	state:{
		list:[],
		page:0,
		total:0,
	},  
	reducers:{
		save(state,{list,page,total}){

			if(num==null){
				num=page;
			}else if(num===state.page){
				return {...state}
			}
			//这里有个bug,跳转的时候调用了save，但是react-tool也没有捕捉到
			state.list = state.list.concat(list);
			state.list.forEach((val,idx)=>{
				val.key = idx;
			})
			state.total+=total;
			state.page = page;
			return Object.assign({},state);
		},
	},
	effects:{
		*get({page},{call,put}){

			let {data:list}= yield call(getList,{page});

			list = list.map((val)=>{
				let date = (function(date){

					return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate());

				})(new Date(val.created_at));
				return {
					name:val.title,
					content:val.body,
					time:date,
					url:val.html_url
				}
			});
			yield put({
				type:'save',
				list:list,
				page:page,
				total:list.length
			});
		},
	},
	subscriptions: {

  },
}