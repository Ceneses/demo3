import axios from "axios";
import store from "@/store";
import {getToken} from "@/utils/auth";

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});

http.interceptors.request.use(
    (config) => {
        if (store.getters.token) {
            config.headers["X-Token"] = getToken();
        }
        return config;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    resp => {
        const res = resp.data;
        if (res.code !== 20000) {
            this.$message({
                type: "error",
                message: res.message || "Error",
                duration: 5 * 1000
            });
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                this.$confirm("此操作将永久删除文件，是否继续?", "提示", {})
                    .then(() => {
                        store.dispatch("user/login")
                            .then(() => {
                                location.reload();
                            });
                    });
                return Promise.reject(new Error(res.message || "Error"));
            }
        } else {
            return res;
        }
    },
    error => {
        console.log("err" + error);
        this.$message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default http;