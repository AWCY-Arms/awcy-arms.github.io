import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import React, { useState } from 'react'
import Base from '../../components/Base'
import Breadcrumb from '../../components/Breadcrumb'
import links from '../../data/links'
import markdownToHtml from '../../utils/mdtohtml'
import { getAllReleases, getReleaseBySlug, Release } from '../../utils/releases'

type ContentPageProps = {
  slug: string
  data: Release
  contentHtml?: { __html: string }
}

type PageParams = {
  id: string
}

const Release = (props: ContentPageProps) => {
  const [mainPicture, setMainPicture] = useState(0)
  return (
    <Base current="releases">
      <main className="flex w-full flex-1 flex-col items-center justify-center bg-black px-20 text-center">
        <div className="">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
            <div>
              <Breadcrumb
                prev={[{ id: '..', href: '', displayName: 'Releases' }]}
                cur={{
                  id: props.slug,
                  href: props.slug,
                  displayName: props.data.displayName,
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex w-full flex-col items-center py-8 lg:w-1/2">
            <div className="my-4 h-56 flex flex-col items-center max-h-96 w-auto overflow-hidden sm:h-72 lg:h-96">
              <img
                src={props.data.images[mainPicture]}
                alt=""
                className="h-full object-contain rounded-2xl bg-gray-300"
              />
            </div>
            <div className="mx-auto mt-6">
              <ul className="grid auto-cols-fr grid-flow-col gap-4">
                {props.data.images.map((filename, i) => (
                  <li
                    key={props.data.images[i]}
                    className={`col-span-1 w-16 rounded border-2 p-1 ${i === mainPicture ? 'border-awcy-red-400' : 'border-transparent'
                      }`}
                  >
                    <button
                      type="button"
                      className="block h-full overflow-hidden rounded"
                      onClick={() => setMainPicture(i)}
                    >
                      <img src={filename} alt="" className="object-contain border-2 border-gray-500 rounded-md" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col lg:w-1/2 lg:py-8">
            <div className="order-1 lg:order-1 pb-5 sm:px-6">
              <h1 className="text-4xl font-semibold tracking-wide text-gray-700 dark:text-gray-200 mb-2">
                {props.data.displayName}
              </h1>
              <h4 className="text-gray-700 dark:text-gray-200">By {props.data.developers.join(", ")}</h4>

              <p className="mt-10 text-base text-gray-500 dark:text-gray-400">
                {props.data.description}
              </p>

              {props.data.features ?
                <ul className="my-5 flex flex-col space-y-2">
                  {Object.keys(props.data.features).map((name) => (
                    <li
                      key={name}
                      className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-awcy-blue" />
                      <span className="text-sm font-semibold">{name}:</span>
                      <span className="text-sm font-normal">
                        {props.data.features[name]}
                      </span>
                    </li>
                  ))}
                </ul> : <></>}
            </div>
            <div className="order-1 lg:order-2 flex flex-wrap items-center justify-around pt-8 sm:px-6 lg:flex-nowrap">
              <a target="_blank" rel="noreferrer" href={`${links.media.odysee}/${props.data.odyseeId}`}
                className="items-center px-5 text-center py-2 inline-flex rounded-md bg-awcy-red-400 text-lg font-semibold uppercase text-white hover:bg-awcy-red-800"
              >
                <img src="/icons/odysee.svg" alt="" className="mr-3 h-6 w-6" />
                Download from Odysee
              </a>
            </div>
            <div className="order-2 lg:order-3 py-8 sm:px-6">
              <div className="flex flex-col items-center space-y-4 px-8 text-gray-500 dark:text-gray-300  sm:space-y-0 sm:space-x-6">
                <div dangerouslySetInnerHTML={props.contentHtml}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Base>
  )
}

export async function getStaticPaths() {
  const releaseData = getAllReleases()

  return {
    paths: releaseData.map((release) => {
      return {
        params: {
          id: release.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<PageParams>): Promise<
  GetStaticPropsResult<ContentPageProps>
> => {
  const release = getReleaseBySlug(params!.id)
  release.contentHtml = { __html: await markdownToHtml(release.content || '') }
  return {
    props: release,
  }
}

export default Release
