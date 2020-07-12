export default {
  async fetchEvents({ commit }, { $repos }) {
    commit('SET_EVENTS', await $repos.events.index())
  },
  async fetchCurrentEvent({ commit }, { $repos, eventId }) {
    commit('SET_CURRENT_EVENT', await $repos.events.show(eventId))
  },
}
