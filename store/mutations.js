export default {
  SET_EVENTS(state, eventsPayload) {
    state.events = eventsPayload
  },
  SET_CURRENT_EVENT(state, currentEventPayload) {
    state.currentEvent = currentEventPayload
  },
}
