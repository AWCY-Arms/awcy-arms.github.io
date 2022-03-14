interface BreadcrumbProps {
  prev: { id: string; displayName: string; href: string }[]
  cur: { id: string; displayName: string; href: string }
}

const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 lg:max-w-7xl"
      >
        {props.prev.map((item) => (
          <li key={item.id}>
            <div className="flex items-center">
              <a
                href={item.id}
                className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                {item.displayName}
              </a>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ))}
        <li className="text-sm">
          <a
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-300"
          >
            {props.cur.displayName}
          </a>
        </li>
      </ol>
    </nav>
  )
}
export default Breadcrumb
