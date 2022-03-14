import { InferGetStaticPropsType, NextPage } from 'next'
import Base from '../components/Base'
import Release from '../components/ReleaseListItem'
import { getAllReleases } from '../utils/releases'

const Releases: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ releases }) => {
  return (
    <Base current="releases">
      <div className="bg-black">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {releases.map((rData) => (
              <Release key={rData.slug} release={rData.data} content={rData.content} />
            ))}
          </div>
        </div>
      </div>
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


export default Releases
