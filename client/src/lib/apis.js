import apiClient from './request';

export const regist = (param) => (
  apiClient.post('/regist', param)
);

export const login = (param) => (
  apiClient.post('/login', param)
);

export const memberList = (param) => (
  apiClient.get('/member/list', param)
);

export const memberCreate = (param) => (
  apiClient.post('/member/create', param)
);

export const verifyList = (params) => (
  apiClient.get('/verify/list', { params })
);
