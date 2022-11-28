import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587452738419_4061';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['*']
};
  
// mysql配置文件
config.mysql = {
  client: {
      // host
      host: '123.56.105.19',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'tbsr_db',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

config.bodyParser = {
  jsonLimit: '10mb',
  formLimit: '10mb',
}

config.multipart = {
  mode: 'stream',
  fileSize: '50mb',
  fileExtensions: [ '.jpg','.png' ], // 扩展允许接收的文件后缀
};

config.proxy = true;
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
