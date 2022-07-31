import { Fragment } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default Home;
