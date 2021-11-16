import axios from '@/utils/axios'

export function list(query) {
    return axios({
        url: `/pyqwenan/index`,
        method: 'get',
        params: query
    })
}

export function updatelist(data) {
    return axios({
      url: `/`,
      method: 'post',
      data
    })
  }