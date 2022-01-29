import axios from '@/utils/axios'

export function list(data) {
    return axios({
        url: `/users/register`,
        method: 'post',
        data
    })
}

export function updatelist(data) {
    return axios({
      url: `/`,
      method: 'post',
      data
    })
  }