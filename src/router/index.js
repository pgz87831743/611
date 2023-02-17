import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage";
import RegisterPage from "@/views/RegisterPage";
import MusicItem from "@/views/MusicItem";


let router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            component: LoginPage
        },
        {
            path: "/login",
            component: LoginPage
        },
        {
            path: "/register",
            component: RegisterPage
        },
        {
            path: "/MusicItem",
            component: MusicItem
        }




    ]
})



export default router;
