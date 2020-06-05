import apiClient from './request';

export const regist = (param) => (
  apiClient.post('/regist', param)
);

export const login = (param) => (
  apiClient.post('/login', param)
);
