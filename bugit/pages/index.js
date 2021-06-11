import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.scss'

export default function Home({articles}) {
  return (
      <div>
          <Head>
              <title>Bugit</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <div>
              <h1>Bugit</h1>
              <p>Track ur bugs its fun I promis</p>
          </div>
      </div>
  )
}
