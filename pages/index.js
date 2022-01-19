import styles from '../styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>Main Page</title>
      <meta name='keywords' content='Something, anything, whatever' />
      <meta name='discription' content='Find the best things' />
    </Head>
      <div>
        <h1 className={styles.title}>Hello World Next!</h1>
        <Image
          src="/images/city.jpg"
          width="400px"
          height="500px"
          alt="night city"
        />
      </div>
    </>
  )
}
