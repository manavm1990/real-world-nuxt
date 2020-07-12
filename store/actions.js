export default {
  async fetchEvents({ commit }, { $repos }) {
    commit('SET_EVENTS', await $repos.events.index())
  },
}
