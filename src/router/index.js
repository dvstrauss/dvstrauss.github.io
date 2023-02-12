import {
  createRouter,
  createWebHistory,
} from "vue-router"

const routes = [
  {
    path: "/",
    name: "app-layout",
    component: () => import("../components/app-layout.vue"),
    children: [
      {
        path: "/",
        name: "home-page",
        component: () => import("../pages/home-page.vue"),
      },
      {
        path: "/hello-world",
        name: "hello-world",
        component: () => import("../pages/hello-world.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "not-found",
        component: () => import("../pages/not-found.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
