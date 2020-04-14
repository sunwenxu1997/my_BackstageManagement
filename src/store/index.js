import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_INFO_COMMIT = 'USER_INFO_COMMIT' //sessionStorage 传值进state

export default new Vuex.Store({
  state: {
    userInfo: { //储存用户相关信息

    },
    isUserLogin: false,
  },
  mutations: {
    [USER_SIGNIN](state, user) {
      sessionStorage.setItem('userInfo', JSON.stringify(user));
      sessionStorage.setItem('isUserLogin', 'true');
      if (JSON.stringify(user)) {
        state.userInfo = user
        // Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : user)
        state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
      }
    },
    [USER_SIGNOUT](state) {
      console.log("USER_SIGNOUT");
      state.isUserLogin = false;
      state.userInfo = {};
      sessionStorage.clear();
    },
    [USER_INFO_COMMIT](state) {
      Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {})
      state.isUserLogin = sessionStorage.getItem('isUserLogin') ? JSON.parse(sessionStorage.getItem('isUserLogin')) : false;
    },
  },
  actions: {
    [USER_SIGNIN]({ commit }, user) {
      commit(USER_SIGNIN, user)
    },
    [USER_SIGNOUT]({ commit }) {
      commit(USER_SIGNOUT)
    },
    [USER_INFO_COMMIT]({ commit }) {
      commit(USER_INFO_COMMIT)
    },
  },
  modules: {}
});
