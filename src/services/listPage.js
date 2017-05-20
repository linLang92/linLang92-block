import request from '../utils/request';
export function getList({page}){
	
	var result = request('https://api.github.com/repos/lifesinger/blog/issues?filter=created&page'+page);
	return result
}
