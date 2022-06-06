
const dev = process.env.NODE_ENVIRONMENT !== 'production';

export const SERVER = dev ? process.env.DEV_URL : process.env.BLOG_URL;
