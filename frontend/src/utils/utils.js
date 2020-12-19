const createDispatch = (props)=>{
    const {dispatch} = props;
    dispatch.doAction = (namespace,method,payload)=>{
        dispatch({type:`${namespace}/${method}`,payload});
    };
    return dispatch;
}

export default {createDispatch};
