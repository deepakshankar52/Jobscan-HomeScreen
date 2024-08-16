import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import mani from "../views/SignUpView.vue"
// import BaseLayoutView from "../views/BaseLayoutView.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/",
    name: "Mani",
    component: mani,
  },
  // {
  //   path: '/baselayout', 
  //   name: 'BaseLayout',
  //   component: BaseLayoutView,
  // },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
