import { createRouter, createWebHistory } from "vue-router";
import FreeComponent from "@/user/login/pages/free.component.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: FreeComponent,
            redirect: "/login",
            props: true,
            children: [
                {
                    path: "/login",
                    name: "Login",
                    component: () => import("../user/login/pages/login.component.vue"),
                }
            ]
        }
    ]
})