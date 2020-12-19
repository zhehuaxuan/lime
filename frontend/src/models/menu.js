import { getMenusList } from '../services/menuService';
export default {
  namespace: 'menus',
  state: [],
  effects: {
    *getMenus(action, { call, put }) {
      const { status, data, desc } = yield call(getMenusList)
      yield put({ type: 'updateMenuList', payload: data });
    }
  },
  reducers: {
    updateMenuList(state, { payload }) {
      console.log(state);
      const obj = {
        ...state,
        ...payload
      };
      console.log(obj);
      return obj;
    }
  }
};