import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Hello there lets create product review website</h1>
      {/* Header */}
      <Header />
      {/* ProductFeed */}
    </div>
  )
}
