import { InferGetStaticPropsType, NextPage } from 'next';
import { getAllReleases, ReleaseData } from '../utils/releases'
import ReleaseListItem from './ReleaseListItem'

const NewReleases: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ releases }) => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-gray-300 font-semibold text-3xl mb-4">Latest Releases</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {releases.slice(0, 3).map((rData: ReleaseData) => (
            <ReleaseListItem key={rData.slug} release={rData.data} content={rData.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      releases: getAllReleases()
    }
  }
}


export default NewReleases
