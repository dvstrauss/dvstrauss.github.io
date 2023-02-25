import ExternalAPI from "../../api/external"
import { addMinutes } from "date-fns"

const fiveMinutes = 5
export default {
  state: {
    isAuthenticated: false,
    user: null,
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
  },
  actions: {
    fetchUser({ commit, getters }) {
      const currentUser = getters.user
      if(!currentUser || !getters.isAuthenticated || new Date() <= addMinutes(currentUser.fetchedAt, 5)) {
        return Promise.resolve(currentUser)
      }

      return ExternalAPI
        .fetchUser(user.username)
        .then(response => {
          commit("setUser", response.data.user)
          return response
        })
    },
    login({ commit }, { username, password }) {
      return ExternalAPI
        .login(username, password)
        .then(response => {
          response.data.user.fetchedAt = new Date()
          commit("setUser", response.data.user)
          commit("setIsAuthenticated", true)
          return response
        })
    },
    updateUser({ commit, getters }, user) {
      let currentUser = { ...JSON.parse(JSON.stringify(getters.user)), ...user }
      if(currentUser.fetchedAt && typeof currentUser.fetchedAt === "string") {
        currentUser.fetchedAt = new Date(currentUser.fetchedAt)
      }
      if(!getters.isAuthenticated || new Date() <= addMinutes(currentUser.fetchedAt, 5)) {
        commit("setUser", currentUser)
        return Promise.resolve(getters.user)
      }

      return ExternalAPI
        .updateUser(currentUser)
        .then(response => {
          response.data.user.fetchedAt = new Date()
          commit("setUser", response.data.user)
          return response
        })
    },
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    },
    setUser(state, user) {
      state.user = user
    },
  },
}
