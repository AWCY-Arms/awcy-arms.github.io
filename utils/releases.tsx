import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'

interface PartsKitVendor {
  logo: string
  name: string
  href: string
}

export interface Release {
  slug: string
  displayName: string
  postDate: string
  category?: string
  description?: string
  odyseeId: string
  developers: string[]
  images: string[]
  features: {[key: string]: string }
  partsKitVendors?: string[]
}

export interface ReleaseData {
  slug: string
  content: string
  contentHtml?: { __html: string }
  data: Release
}

const releasesDir = typeof join == "function" ? join(process.cwd(), 'data/releases') : "data/releases"

export function getReleaseSlugs() {
  return fs.readdirSync(releasesDir)
}

export function getReleaseBySlug(slug: string): ReleaseData {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(releasesDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  })
  data["slug"] = realSlug
  return {
    slug: realSlug,
    content: content,
    data: data as Release,
  }
}

export function getAllReleases() {
  const releases = getReleaseSlugs()
    .map((slug) => getReleaseBySlug(slug))
    // sort by date in descending order
    .sort((release1, release2) =>
      release1.data.postDate > release2.data.postDate ? -1 : 1
    )
  return releases
}
