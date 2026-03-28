import { createRouter, createWebHistory } from "vue-router";
import AboutComponent from "../components/AboutComponent.vue";
import Home from "../view/Home.vue";
import AuthLayout from "../layout/AuthLayout.vue";
import CartView from "../components/cart/CartView.vue";
import CartDetail from "../components/cart/CartDetail.vue";

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
      {
        path:'product',
        name: 'product',
        component: CartView
      },
      {
        path: 'product/:id',
        name: 'productDetail',
        component: CartDetail
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
