import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from './footer'
import Home from '../pages/home'

import Default from '../pages/default'
import Library from '../pages/library'
import Photo from '../pages/Photo'
import Custom from '../pages/Custom'

import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
  const { asPath } = useRouter();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>SkyBox</title>
          <meta name="description" content="Generate beautiful terminal photos" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <span className="text-sky-700">Sky</span>Box
          </h1>
          { asPath == '/' && <HomePage/> }
          { asPath == '/default' && <Default/> }
          { asPath == '/library' && <Library/> }
          { asPath == '/photo' && <Photo/> }
          { asPath == '/custom' && <Custom/> }
        </main>
        <Footer />
      </div>
    </>
  )
}
