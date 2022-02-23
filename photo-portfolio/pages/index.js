import Head from 'next/head'
import Image from 'next/image'
import { lazy } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeremy Welsh</title>
        <meta name="Photo Portfolio" content="Jeremy's photos" />
        {/* update this image for the tab icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.sideNav}>
        <h1>Jeremy Welsh</h1>
        <a href="#">Barn Finds</a>
        <a href="#">Tutukaka 2022</a>
        <a href="#">Hardpark22</a>
        <a href="#">Hardpark21</a>
        <a href="#">Auckland Zoo</a>
      </div>
      <main className={styles.main}>
        <Image
        src="/IMG_1516.jpg"
        alt="Picture of the author"
        width={1000}
        height={450}
      />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

/* main
<h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <Image
          src="https://lh3.googleusercontent.com/pw/AM-JKLUtaGGlPe7dc15Fd7R00ipYrFTKYMgi2nr-ZNVnosUybAe_QCVQFO3iqK2jpFxMESOQyIJHP2g5G7Nk8Z43hMUz1DoQNw7_AP76F1Jr3CJcHHLeGdbyml3o1BTuFuO8xIm6pT-JBwk_P2IwYAHJVs9rsw=w861-h1290-no?authuser=0" // Route of the image file
          decoding='async'
          height={490} // Desired size with correct aspect ratio
          width={327} // Desired size with correct aspect ratio
          alt="Your Name"
        />

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        */

/* footer
<a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by{' '}
  <span className={styles.logo}>
    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  </span>
</a>
*/