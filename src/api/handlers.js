import axios from 'axios'
import { res } from './example'
import { templates } from 'data/templates'

export const getDataFromLink = () => {
  return axios.get('/')
    .then(data => {
      const d = Object.keys(res).reduce((prev, key) => {
        return {
          ...prev,
          [key]: res[key].slice()
        }
      }, {})
      return {
        ...d,
        templates
      }
    })
}
