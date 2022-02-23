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
        <div className={styles.carousel}>
        <Image
              src="/IMG_1516.jpg"
              alt="Hardpark Red Cars"
              width={3960}
              height={1782}
              quality={30}
            />
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Image
              src="/IMG_9358.jpg"
              alt="GT40 Side Profile"
              width={5947}
              height={2141}
            />
            <Image
              src="/IMG_9177.jpg"
              alt="Diablo Front"
              width={4000}
              height={6000}
              quality={5}
            />
            <Image
              src="/IMG_9061.jpg"
              alt="Ferrari Interior"
              width={3015}
              height={4532}
              quality={5}
            />
            <Image
              src="/IMG_8431.jpg"
              alt="Maroon BMW"
              width={5553}
              height={2380}
              quality={5}
            />
            <Image
              src="/IMG_8267.jpg"
              alt="WRX Varis"
              width={3583}
              height={5375}
              quality={5}
            />
            <Image
              src="/IMG_7786.jpg"
              alt="Boat at Poor Knights Islands"
              width={5848}
              height={3899}
              quality={5}
            />
            <Image
              src="/IMG_7533.jpg"
              alt="Giant Dunes"
              width={4000}
              height={2677}
              quality={5}
            />
            <Image
              src="/IMG_7214.jpg"
              alt="Boat in the country side"
              width={3186}
              height={3983}
              quality={5}
            />
            <Image
              src="/IMG_7106.jpg"
              alt="Morning boats"
              width={5769}
              height={3846}
              quality={5}
            />
            <Image
              src="/IMG_5357.jpg"
              alt="Rav4"
              width={5785}
              height={3857}
              quality={5}
            />
            <Image
              src="/IMG_3687.jpg"
              alt="Botanics Green"
              width={4000}
              height={5000}
              quality={5}
            />
            <Image
              src="/IMG_3037.jpg"
              alt="Masked Lovebirds"
              width={3629}
              height={5443}
              quality={5}
            />
            <Image
              src="/IMG_1542.jpg"
              alt="Onramp S15"
              width={5451}
              height={2413}
              quality={5}
            />
            <Image
              src="/IMG_1439.jpg"
              alt="Bosozoku"
              width={6000}
              height={4000}
              quality={5}
            />
            <Image
              src="/IMG_1263.jpg"
              alt="AE86"
              width={4000}
              height={6000}
              quality={5}
            />
          </div>
          <div className={styles.col}>
          <Image
              src="/IMG_9299.jpg"
              alt="GT40 Shadow"
              width={3764}
              height={5652}
              quality={5}
            />
            <Image
              src="/IMG_9103.jpg"
              alt="Diablo Front"
              width={3791}
              height={5687}
              quality={5}
            />
            <Image
              src="/IMG_9042.jpg"
              alt="Huracan Lights"
              width={3732}
              height={5598}
              quality={5}
            />
            <Image
              src="/IMG_8418.jpg"
              alt="Nissan swap Subaru"
              width={3793}
              height={1897}
              quality={5}
            />
            <Image
              src="/IMG_8001.jpg"
              alt="Waves Crashing close up"
              width={4234}
              height={2823}
              quality={5}
            />
            <Image
              src="/IMG_7606.jpg"
              alt="Stars over Tutukaka"
              width={6000}
              height={4000}
              quality={5}
            />
            <Image
              src="/IMG_7446.jpg"
              alt="Cape Reinga Directions"
              width={3667}
              height={5500}
              quality={5}
            />
            <Image
              src="/IMG_7131.jpg"
              alt="Morning Tree Wide"
              width={5857}
              height={2510}
              quality={5}
            />
            <Image
              src="/IMG_7062.jpg"
              alt="Sunset Palm"
              width={3523}
              height={5284}
              quality={5}
            />
            <Image
              src="/IMG_5152.jpg"
              alt="Sunset Hills"
              width={3606}
              height={5409}
              quality={5}
            />
            <Image
              src="/IMG_3673.jpg"
              alt="Hexagonal Yellow Tree"
              width={5223}
              height={3482}
              quality={5}
            />
            <Image
              src="/IMG_2989.jpg"
              alt="Orangutan"
              width={4718}
              height={3145}
              quality={5}
            />
            <Image
              src="/IMG_1516.jpg"
              alt="Hardpark Red Cars"
              width={3960}
              height={1782}
              quality={5}
            />
            <Image
              src="/IMG_1382.jpg"
              alt="R32"
              width={3443}
              height={5165}
              quality={5}
            />
          </div>
          <div className={styles.col}>
          <Image
              src="/IMG_9279.jpg"
              alt="Top Down Collection"
              width={3827}
              height={5740}
              quality={5}
            />
            <Image
              src="/IMG_9080.jpg"
              alt="Diablo GT40 Back"
              width={4000}
              height={5600}
              quality={5}
            />
            <Image
              src="/IMG_8460.jpg"
              alt="Cars Leaving Hardpark"
              width={4780}
              height={3187}
              quality={5}
            />
            <Image
              src="/IMG_8302.jpg"
              alt="VW Hubcap"
              width={2029}
              height={3044}
              quality={5}
            />
            <Image
              src="/IMG_7911.jpg"
              alt="Poor Knights Tunnel"
              width={3752}
              height={2111}
              quality={5}
            />
            <Image
              src="/IMG_7574.jpg"
              alt="Giant Dunes Rental"
              width={4766}
              height={3177}
              quality={5}
            />
            <Image
              src="/IMG_7301.jpg"
              alt="Deck Chair Sunset"
              width={6000}
              height={4000}
              quality={5}
            />
            <Image
              src="/IMG_7123.jpg"
              alt="Sunrise tree"
              width={5422}
              height={3615}
              quality={5}
            />
            <Image
              src="/IMG_5446.jpg"
              alt="Shadow Ripple"
              width={3934}
              height={2623}
              quality={5}
            />
            <Image
              src="/IMG_4425.jpg"
              alt="WESTY2"
              width={3496}
              height={2331}
              quality={5}
            />
            <Image
              src="/IMG_3298.jpg"
              alt="Orange Film Grain"
              width={3939}
              height={3939}
              quality={5}
            />
            <Image
              src="/IMG_2972.jpg"
              alt="Squirrel Monkeys"
              width={6000}
              height={4000}
              quality={5}
            />
            <Image
              src="/IMG_1473.jpg"
              alt="Sombrero Bug"
              width={5000}
              height={4000}
              quality={5}
            />
            <Image
              src="/IMG_1318.jpg"
              alt="Drift S15"
              width={3790}
              height={5685}
              quality={5}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}