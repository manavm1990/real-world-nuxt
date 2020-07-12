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
export default {
  components: {
    EventCard: () =>
      import(
        /* webpackChunkname: 'home' */
        '@/components/scoped/home/EventCard'
      ),
  },
  async asyncData({ $repos, error }) {
    try {
      return { events: await $repos.events.index() }
    } catch (e) {
      error({
        statusCode: 503,
        message: `😞 Currently facing issue loading events! Shall we try again?
        ${e.message}`,
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
