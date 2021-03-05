import styles from '../styles/Layout.module.css'
import Head from "next/head";
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
