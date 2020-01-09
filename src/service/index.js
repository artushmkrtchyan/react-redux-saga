import { fetcher, uploadFetcher } from './fetch'

export default {
   user: (id) => fetcher(`/users/${id}`),
   users: (count) => fetcher(`/users?_limit=${count}`)
}