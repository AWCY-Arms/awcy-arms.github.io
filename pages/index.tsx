import Landing from '../components/Landing'
import NewReleases from '../components/NewReleases'
import Base from '../components/Base'
import { getAllReleases } from '../utils/releases'
import { InferGetStaticPropsType, NextPage } from 'next'


const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ releases }) => {
  return (
    <Base current="home">
      <Landing></Landing>
      <NewReleases releases={releases} />
    </Base>
  )
}

export async function getStaticProps() {
  return {
    props: {
      releases: getAllReleases()
    }
  }
}


export default Home
