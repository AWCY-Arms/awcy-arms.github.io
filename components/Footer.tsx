import Link from "next/link"
import links from "../data/links"
import RandomQuote from "./RandomQuote"

const Footer = () => {
  return <footer className="bg-awcy-red-400 dark:bg-awcy-red-800 w-full pt-8">
    <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left w-48">
        <img className="mb-8 w-60 max-h-40" src="/awcy_crossends_hwite.svg" alt="AWCY? Crossends"></img>
        <p className="text-base text-gray-200">Art is NOT meant to be contained</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 lg:pl-30 -mb-10 md:mt-0 mt-10 md:text-left">
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-100 tracking-widest text-xl mb-3 uppercase">Pages</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/releases/">
                <a className="text-gray-100 hover:text-gray-500">🔫 Releases</a>
              </Link>
            </li>
            <li>
              <a href="/nfo-gen/" className="text-gray-100 hover:text-gray-500">📝 NFO Editor</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-100 tracking-widest text-xl mb-3 uppercase">Main Site</h2>
          <nav className="list-none mb-10">
            <li>
              <a href={links.mainSite.about} className="text-gray-100 hover:text-gray-500">About</a>
            </li>
            <li>
              <a href={links.mainSite.guide} className="text-gray-100 hover:text-gray-500">Guide</a>
            </li>
            <li>
              <a href={links.mainSite.join} className="text-gray-100 hover:text-gray-500">Join</a>
            </li>
            <li>
              <a href={links.mainSite.misc} className="text-gray-100 hover:text-gray-500">Misc</a>
            </li>
            <li>
              <a href={links.mainSite.shop} className="text-gray-100 hover:text-gray-500">Shop</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-100 tracking-widest text-xl mb-3 uppercase">🚧 Coming Soon™</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-100 hover:text-gray-500">📔 Blog</a>
            </li>
            <li>
              <a className="text-gray-100 hover:text-gray-500">📕 The 2022 AWCY? PDF Catalog</a>
            </li>
            <li>
              <a className="text-gray-100 hover:text-gray-500">🎨 Brand Kit</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="w-full  bg-awcy-red-800 dark:bg-awcy-red-400">
      <div className="py-8 px-16 sm:px-4 flex max-w-md mx-auto items-center justify-between">
        <a href={links.media.twitter} className="text-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
            </path>
          </svg>
        </a>
        <a href={links.media.github} className="text-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
        <a href={links.media.odysee} className="text-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          <svg width="20" height="20" fill="currentColor" className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="m896 0c-496 0-896 400-896 896v0.17c0 28 1.4 55 3.9 82 14-29 38-55 68-80 51-41 103-62 165-95 98-53 207-74 236-102-51-169-142-431 63-554 162-97 376-139 457 95 81 234 58 271 93 271s102-14 144-127c36-98 53-196 106-232a120 120 0 0 1 35-19c-138-86-300-136-475-136zm-80 163c-27-1.4-59 3.7-99 17 0 2e-5 -142 38-132 191 8.7 135 81 209 230 153v0.37c148-56 176-97 139-209-28-84-58-148-139-152zm37 55a19 19 0 0 1 14 5.2 104 104 0 0 1 17 26 20 20 0 0 1-7 26 20 20 0 0 1-26-8.9 80 80 0 0 0-11-17 19 19 0 0 1 0-26 19 19 0 0 1 12-5.2zm264 12a17 17 0 0 1 15 7.4 15 15 0 0 1-5.2 23 17 17 0 0 1-23-5.4 17 17 0 0 1 5.2-23 17 17 0 0 1 7.9-2.2zm430 50c-0.052 8.9-0.41 18-1.2 26-2.4 84-57 180-85 231-43 72-174 209-248 281a55 55 0 0 0 5.4 83c76 56 193 167 229 258a2226 2226 0 0 1 104 322 102 102 0 0 1 2.5 25c148-160 238-373 238-609v-0.17c0-239-93-456-245-616zm-647 44a17 17 0 0 1 17 12 107 107 0 0 1 7 74 17 17 0 0 1-17 16h-3.5a20 20 0 0 1-16-23 80 80 0 0 0-5.2-52 17 17 0 0 1 10-24 17 17 0 0 1 7.1-2zm-635 10a8.9 8.9 0 1 1-3.5 17v-0.17a7.8 7.8 0 0 1-7.1-10c0-5.2 5.4-7 11-7zm1222 292 19 42 46 11-41 19-10 46-20-40-46-11 42-20zm-1346 42a17 17 0 0 1 15 7.5 16 16 0 0 1-5.4 23h-0.17a17 17 0 0 1-17-28 17 17 0 0 1 8-2.3zm1212 211a20 20 0 0 1 3.9 0.41 19 19 0 1 1-23 14 20 20 0 0 1 19-14zm-814 94a803 803 0 0 0-207 96c-131 98-216 137-275 110a126 126 0 0 1-15-8.9c64 200 195 368 368 479-6.2-12-11-25-15-39-55-204 186-180 202-180 16 0 169-48 95-191-74-144-153-266-153-266zm490 247c-8.4 0.1-17 0.82-26 2.2 0 0 37 322-113 420-78 52-195 96-297 98 94 33 196 52 301 52h0.17c180 0 348-53 488-144a231 231 0 0 1-45 4.8c-147-3.5-116-141-130-220-13-74-54-215-180-213zm-710 2.1a12 12 0 0 1 12 11c0 7.1-3.6 14-11 14a12 12 0 0 1-14-10c-1.7-7.1 3.5-12 11-14v-0.17a12 12 0 0 1 1.8-0.17zm735 310c1.7-0.14 3.4 0.18 5.2 1a14 14 0 1 1-17 11c2.5-6.6 7-11 12-12z" />
          </svg>
        </a>
        <a href={links.media.youtube} className="text-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          <svg height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 13.6">
            <path d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z" />
          </svg>
        </a>
        <a href={links.media.instagram} className="text-gray-200 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
          <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="m896 0c243 0 274 1 369 5.4 95 4.3 161 19 217 42 59 23 109 53 159 103 50 50 80 99 103 158 22 57 37 122 42 217 4.4 95 5.4 126 5.4 368 0 243-1 273-5.4 368-4.3 95-19 160-42 217-23 59-54 109-103 158-50 50-100 80-159 103-57 22-122 37-217 42-96 4.3-126 5.4-369 5.4-243 0-274-1-369-5.4-95-4.3-161-19-217-42-59-23-109-53-159-103-50-50-80-99-103-158-22-57-37-122-42-217-4.4-95-5.4-126-5.4-368 0-243 1-273 5.4-368 4.3-95 19-160 42-217 23-59 54-109 103-158 50-50 100-80 159-103 57-22 122-37 217-42 96-4.3 126-5.4 369-5.4zm362 166c-94-4.3-123-5.2-362-5.2-239 0-268 .91-362 5.2-87 4-135 19-166 31-42 16-72 36-103 67-31 31-51 61-67 103-12 31-27 79-31 166-4.3 94-5.2 122-5.2 361 0 238 .91 267 5.2 361 4 87 19 134 31 166 16 42 36 71 67 103 31 31 61 51 103 67 32 12 79 27 166 31 94 4.3 123 5.2 362 5.2 239 0 268-.91 362-5.2 87-4 135-19 166-31 42-16 72-36 103-67 31-31 51-61 67-103 12-31 27-79 31-166 4.3-94 5.2-122 5.2-361 0-238-.91-267-5.2-361-4-87-19-134-31-166-16-42-36-71-67-103-31-31-61-51-103-67-32-12-79-27-166-31zm-362 1e3c165 0 299-133 299-298 0-164-134-298-299-298-165 0-299 133-299 298 0 164 134 298 299 298zm0-756c254 0 460 205 460 459 0 253-206 459-460 459-254 0-460-205-460-459 0-253 206-459 460-459zm586-18c0 59-48 107-108 107-59 0-108-48-108-107 0-59 48-107 108-107 59 0 108 48 108 107z">
            </path>
          </svg>
        </a>
        <a href={links.media.defcad} className="text-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
          <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="m896 0a896 896 0 00-896 896 896 896 0 00896 896 896 896 0 00896-896 896 896 0 00-896-896zm0 179a717 717 0 01717 717 717 717 0 01-717 717 717 717 0 01-717-717 717 717 0 01717-717zm-358 358c-50 0-90 40-90 90v179c0 34 19 64 47 79l-46 259c-8.6 49 24 95 73 104l88 16c49 8.6 95-24 104-73l52-294h488c50 0 90-40 90-90v-179c0-50-40-90-90-90z" /></svg>
        </a>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm font-medium text-center sm:text-left"><span className="text-gray-100">2022 AWCY?</span>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm"><RandomQuote /></span>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
