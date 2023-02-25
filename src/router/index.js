import {
  createRouter,
  createWebHistory,
} from "vue-router"
import store from "../store"

const routes = [
  {
    path: "/",
    name: "about-page",
    component: () => import("../pages/about-page.vue"),
    alias: "/about",
  },
  {
    path: "/login",
    name: "login-page",
    component: () => import("../pages/login-page.vue"),
    meta: {
      navigationGuard: (_to, _from) => {
        if(store.getters.isAuthenticated) {
          return { name: "about-page" }
        }
      }
    },
  },
  {
    path: "/settings",
    name: "settings-page",
    component: () => import("../pages/settings-page.vue"),
    meta: {
      navigationGuard: (_to, _from) => {
        if(!store.getters.isAuthenticated) {
          return { name: "login-page" }
        }
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/not-found.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  if(to.name === "not-found") return
  if(to.meta.navigationGuard) return to.meta.navigationGuard(to, from)
})

export default router
