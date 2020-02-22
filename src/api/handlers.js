import axios from 'axios'
import { res } from './example'

export const getDataFromLink = () => {
  return axios.get('/')
    .then(data => {
      return res
    })
}
