import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>homwpage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod luctus purus, sed feugiat nisl finibus id. Suspendisse porta lacus elit, quis aliquam sem hendrerit eget. Duis a mattis lectus, non dapibus est. Aliquam enim diam, ornare ut consequat ac, viverra vitae nulla. In tincidunt ligula quam, eget sodales eros sollicitudin in. Nullam hendrerit elit vel est lobortis, a euismod ligula venenatis. Cras tristique pulvinar nulla, nec aliquam urna vestibulum in. Sed egestas mauris et tempor dictum. In varius nibh urna. Nulla quam lorem, dictum et venenatis eu, sodales vel quam.</p>
      <Link href="/ninjas">See Ninja Listing</Link>
      <Footer />
    </>
  )
}
