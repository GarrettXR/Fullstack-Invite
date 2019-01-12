import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getInvites() {
  axios.get('/invites').then(resp => {
    store.dispatch({
      type: 'GET_INVITES', 
      invites: resp.data.invites
    })
  })
}