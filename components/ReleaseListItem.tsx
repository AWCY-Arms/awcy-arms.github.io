import Link from 'next/link'
import { Release } from '../utils/releases'

interface ReleaseProp {
  release: Release,
  content: string,
}

const ReleaseListItem = (props: ReleaseProp) => {
  return (
    <Link key={props.release.slug} href={`/releases/${props.release.slug}/`}>
      <a className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={`/releases/${props.release.slug}/${props.release.images[0]}`}
            alt=""
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-100">
          {props.release.displayName}
        </h3>
        <p className="mt-1 text-sm text-gray-300">{props.release.developers.join(", ")}</p>
        <p className="text-gray-400 dark:text-gray-300">{props.release.category}</p>
      </a>
    </Link>
  )
}

export default ReleaseListItem
