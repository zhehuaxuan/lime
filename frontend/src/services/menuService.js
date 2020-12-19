import { request } from 'umi';

export const getMenusList = ()=>{
    return request('/api/menus',{
        method: "get",
        dataType: "payload"
    })
}


export default {};