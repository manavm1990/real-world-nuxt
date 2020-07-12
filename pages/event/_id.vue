<template>
  <h1>{{ event.title }}</h1>
</template>

<script>
export default {
  async asyncData({ $repos, error, params }) {
    try {
      return { event: await $repos.events.show(params.id) }
    } catch (e) {
      error({
        statusCode: 503,
        message: `😞 Currently facing issue loading event #${params.id}! 
        ${e.message}`,
      })
    }
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `What you NTK about ${this.event.title}`,
        },
      ],
    }
  },
}
</script>
