import request from '@/utils/request'

export const getMembers = (params: any) =>
  request({
    url: '/members',
    method: 'get',
    params
  })
