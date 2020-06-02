import apiClient from './request';

export const getListTest = () => (
  apiClient.get('/v1/list')
);

export const getChartTest = () => (
  apiClient.get('/v1/chart')
);
