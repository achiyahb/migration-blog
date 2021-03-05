
const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://d17tfpwcy3k48c.cloudfront.net'
