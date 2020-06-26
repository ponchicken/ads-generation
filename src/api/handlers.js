import axios from 'axios'
// import { res } from './example'
import { templates } from 'data/templates'

const root = 'https://725epzm94l.execute-api.eu-central-1.amazonaws.com/dev'
// const root = 'http://localhost:3006'

export const endpoints = {
  getUrlData: `${root}/getUrlData`,
  imageUrl: `${root}/imageUrl?url=`
}

export const getImageUrl = (url) => {
  return encodeURIComponent(`${endpoints.imageUrl}${url}`)
}

export const getDataFromLink = (params) => {
  return axios.get(endpoints.getUrlData, {
    params
  })
    .then(response => {
      return {
        ...response.data,
        templates
      }
    })
    .catch(error => {
      console.error(error)
    })
    // .then(response => {
    //   console.log(response)
    //   return Promise.all(
    //     response.data.images.map(image => {
    //       return {
    //         ...image,
    //         src: URL.createObjectURL(new Blob([image.data]), { type: 'image/png' })
    //       }
    //     })
    //   ).then(images => {
    //     console.log(images)

  //     return {
  //       ...response.data,
  //       images,
  //       templates
  //     }
  //   })
  // })

  // return new Promise((resolve, reject) => {
  //   try {
  //     const d = Object.keys(res).reduce((prev, key) => {
  //       return {
  //         ...prev,
  //         [key]: res[key].slice()
  //       }
  //     }, {})
  //     resolve({
  //       ...d,
  //       templates
  //     })
  //   } catch (error) {
  //     reject(error)
  //   }
  // })
  // return axios.get('/')
  //   .then(data => {
  //     const d = Object.keys(res).reduce((prev, key) => {
  //       return {
  //         ...prev,
  //         [key]: res[key].slice()
  //       }
  //     }, {})
  //     return {
  //       ...d,
  //       templates
  //     }
  //   })
}
