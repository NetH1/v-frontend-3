import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Products from "@/views/Products.vue";
import iphone13pro from "@/components/productiphone.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/products/:id",
      name: "product",
      component: Product,
    },
    {
      path: "/iphone13pro",
      name: "iphone13pro",
      component: iphone13pro,
    },
  ],
});

export default router;
