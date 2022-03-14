import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

interface BasePageProps {
  current?: string
  children?: ReactNode
}

const Base = (props: BasePageProps) => {
  return (
    <div>
      <Head>
        <title>AWCY?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar current={props.current}></NavBar>
      {props.children}
      <Footer />
    </div>
  )
}

export default Base
