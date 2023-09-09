import Vuex from "vuex";
import user from "./modules/user";
import settings from "./modules/settings";
import app from "./modules/app";

export default new Vuex.Store({
    modules: {
        user,
        settings,
        app
    }
})