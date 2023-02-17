import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage";
import RegisterPage from "@/views/RegisterPage";


let router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: "/",
            component: LoginPage
        },
        {
            path: "/register",
            component: RegisterPage
        }




    ]
})



export default router;
