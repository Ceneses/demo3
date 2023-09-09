import {getToken} from "@/utils/auth";

const getDefaultState = () => {
    return {
        token: getToken(),
        name: "",
        avatar: ""
    };
};
const state = getDefaultState();

const mutations = {
    // 重置
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState());
    },
    // 设置Token
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    // 设置Name
    SET_NAME: (state, name) => {
        state.name = name;
    },
    // 设置avatar
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar;
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};