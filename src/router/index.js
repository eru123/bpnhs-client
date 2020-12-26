import Vue from "vue";
import VueRouter from "vue-router";
import Start from "@/views/Start.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import NonAuth from "@/views/NonAuth.vue";
import Logout from "@/views/Logout";
import NotFound from "@/views/NotFound";
import TermsAndConditions from "@/views/TermsAndConditions";
import Auth from "@/views/Auth";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/start"
  },
  {
    path: "/home",
    component: Auth,
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "/a_about",
        name: "AAbout",
        component: About
      },
      {
        path: "/a_terms",
        name: "ATermsAndConditions",
        component: TermsAndConditions
      }
    ]
  },
  {
    path: "/login",
    component: NonAuth,
    children: [
      {
        path: "/start",
        name: "Start",
        component: Start
      },
      {
        path: "",
        name: "Login",
        component: Login
      },
      {
        path: "/register",
        name: "Register",
        component: Register
      },
      {
        path: "/na_about",
        name: "NAAbout",
        component: About
      },
      {
        path: "/na_terms",
        name: "NATermsAndConditions",
        component: TermsAndConditions
      }
    ]
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({ routes });

export default router;
