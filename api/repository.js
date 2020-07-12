export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`http://localhost:5000/${resource}`)
  },

  // create(payload) {
  //   return $axios.$post(`/posts`, payload)
  // },

  show(id) {
    return $axios.$get(`http://localhost:5000/${resource}/${id}`)
  },

  // update(payload, id) {
  //   return $axios.$put(`/posts/${id}`, payload)
  // },

  // delete(id) {
  //   return $axios.$delete(`/posts/${id}`)
  // },
})
