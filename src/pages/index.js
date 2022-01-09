import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PRW</title>
      </Head>
      {/* Header */}
      <Header />
      {/* ProductFeed */}
    </div>
  )
}
