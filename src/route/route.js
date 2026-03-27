import { createRouter, createWebHistory } from "vue-router";
import AboutComponent from "../components/AboutComponent.vue";
import Home from "../view/Home.vue";
import AuthLayout from "../layout/AuthLayout.vue";

const routes = [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "about",
        name: "about",
        component: AboutComponent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
