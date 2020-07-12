export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(
      `http://my-json-server.typicode.com/manavm1990/events${resource}`
    )
  },

  show(id) {
    return $axios.$get(
      `http://my-json-server.typicode.com/manavm1990/events${resource}/${id}`
    )
  },
})
