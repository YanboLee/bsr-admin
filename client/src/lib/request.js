import axios from 'axios';

export const API_BASE_VERSION = '2.11.1';
export const APP_VERSION = '1.0.0';

export const crucioClient = axios.create({
  baseURL: '/',
  timeout: 30000,
  withCredentials: true,
  headers: {
    'X-Crucio-User-Agent': `Crucio/${API_BASE_VERSION} (CrucioWebApp/${APP_VERSION}; CrucioEditor)`,
  },
});

export default crucioClient;
