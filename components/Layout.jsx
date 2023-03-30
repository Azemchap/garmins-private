
import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Home.module.css'


export default function Layout({ title, children }) {

    return (
        <>
            <Head>
                <title>{title ? title + ' - My-store' : 'My-store'}</title>
                <meta name="description" content="E-commerce Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>



            <div className={styles.main}>
                <Nav />
                <div className="my-10 px-4 min-h-screen dark:bg-slate-900">{children}</div>
                <footer className="flex h-14 justify-center items-center  ">
                    <p>Copyright © 2022 My-store</p>
                </footer>
            </div>
        </>
    )
}
