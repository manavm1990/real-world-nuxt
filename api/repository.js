export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`${$axios.defaults.baseURL}/${resource}`)
  },

  show(id) {
    return $axios.$get(`${$axios.defaults.baseURL}/${resource}/${id}`)
  },
})
