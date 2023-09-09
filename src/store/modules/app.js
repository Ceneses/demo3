/**
 * 应用设置
 */
import Cookies from "js-cookie";

const state = {
    // 当前应用的侧边栏
    sidebar: {
        // + 把数字1变成文本1
        // ! 把文本1变成布尔true
        // ! 把true变成false
        opened: Cookies.get("sidebarStatus") ? !!+Cookies.get("sidebarStatus") : true,
        // 有动画
        withoutAnimation: false
    },
    // 当前设备类型
    device: "desktop"
};

const mutations = {
    // 切换侧边栏
    TOGGLE_SIDEBAR: state => {
        // 切换动画状态
        state.sidebar.opened = !state.sidebar.opened;
        // 有动画
        state.sidebar.withoutAnimation = false;
        // 更新浏览器的cookies数据
        if (state.sidebar.opened) {
            Cookies.set("sidebarStatus", 1);
        } else {
            Cookies.set("sidebarStatus", 0);
        }
    },
    // 关闭侧边栏
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        Cookies.set("sidebarStatus", 0);
        state.sidebar.opened = false;
        state.sidebar.withoutAnimation = withoutAnimation;
    },
    // 切换设备
    // this, 参数
    TOGGLE_DEVICE: (state, device) => {
        state.device = device;
    }
};

const actions = {
    toggleSidebar({commit}) {
        commit("TOGGLE_SIDEBAR");
    },
    closeSideBar({commit}, {withoutAnimation}) {
        commit("CLOSE_SIDEBAR", withoutAnimation);
    },
    toggleDevice({commit}, device) {
        commit("TOGGLE_DEVICE", device);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};