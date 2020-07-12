<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    EventCard: () =>
      import(
        /* webpackChunkname: 'home' */
        '@/components/scoped/home/EventCard'
      ),
  },
  async fetch({ store, error, $repos }) {
    try {
      await store.dispatch('fetchEvents', { $repos })
    } catch (e) {
      error({
        statusCode: 503,
        message: `😞 Currently facing issue loading events. Shall we try again?
      ${e.code} - ${e.message}
      `,
      })
    }
  },
  computed: mapState({
    events: ({ events }) => events,
  }),
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
