import styles from '../styles/Layout.module.css'
import Head from "next/head";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
