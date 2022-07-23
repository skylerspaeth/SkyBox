import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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

        <p className={styles.description}>
          <code className={styles.code}>Get started by picking a background!</code>
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Default &rarr;</h2>
            <p>Use SkyBox's default gradients and settings.</p><br/>
          </a>

          <a href="" className={styles.card}>
            <h2>Library &rarr;</h2>
            <p>Choose from a selection of beautiful UIGradients.</p><br/>
          </a>

          <a href="" className={styles.card}>
            <h2>Photo &rarr;</h2>
            <p>Upload your own photo instead of using a gradient.</p><br/>
          </a>

          <a href="" className={styles.card}>
            <h2>Custom &rarr;</h2>
            <p>Create your own custom gradient.</p><br/>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        Open Source&nbsp;&nbsp;&bull;&nbsp;
        Made by&nbsp;<span className="text-neutral-500"><a href="https://github.com/skylerspaeth" target="_blank">Skyler Spaeth</a></span>
      </footer>
    </div>
  )
}
