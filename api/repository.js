export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`http://localhost:5000/${resource}`)
  },

  show(id) {
    return $axios.$get(`http://localhost:5000/${resource}/${id}`)
  },
})
