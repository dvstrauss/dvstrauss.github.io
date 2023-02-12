export default {
  state: {
    user: null,
  },
  getters: {
    user: state => state.user,
  },
  actions: {
    fetchUser(context, username) {
      const user = {
        username,
        firstName: "D",
        lastName: "vS",
      }
      context.commit("setUser", user)
      return Promise.resolve(context.getters.user)
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
}
