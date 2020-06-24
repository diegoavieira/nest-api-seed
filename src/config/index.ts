process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const nodeEnv = process.env.NODE_ENV;

const config = (): any => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  database_uri: process.env.DATABASE_URI,
  domain: process.env.DOMAIN,
  audience: process.env.AUDIENCE,
  client_id: process.env.CLIENT_ID,
  is_dev: nodeEnv === 'development',
  is_prod: nodeEnv === 'production'
});

export default config;
