import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "IndexLayout",
        component: () => import("@/layout/IndexLayout"),
        children: [
            {
                path: "/dashboard",
                component: () => import("@/layout/components/dashboard/DashBoard"),
            },
            {
                path: "/setting",
                component: () => import("@/layout/components/SettingComponent/SettingComponent"),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;