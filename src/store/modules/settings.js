/**
 * 项目参数
 */
import defaultSettings from "@/settings";

const {showSettings, fixedHeader, sidebarLogo} = defaultSettings;

const state = {
    showSetting: showSettings,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
};

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        // if (state.hasOwnProperty(key)) {
        state[key] = value;
        // }
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};