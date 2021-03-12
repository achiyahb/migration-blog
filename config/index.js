
const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:8070' : 'https://d17tfpwcy3k48c.cloudfront.net'
