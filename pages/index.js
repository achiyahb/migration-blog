import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
    </div>
  )
}
