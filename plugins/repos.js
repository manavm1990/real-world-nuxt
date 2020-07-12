import createRepository from '~/api/repository'

export default ({ $axios }, inject) => {
  const axiosRepo = createRepository($axios)

  const repos = {
    events: axiosRepo('/events'),
  }

  inject('repos', repos)
}
