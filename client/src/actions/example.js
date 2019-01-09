import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function makeACall() {
  axios.get('/example').then(resp => {
    store.dispatch({
      type: 'EXAMPLE', 
      example: resp.data.example
    })
  })
}