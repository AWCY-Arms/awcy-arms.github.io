import { useEffect, useState } from 'react'
import taglines from '../data/taglines'

const RT = () => {
  const [quote, setQuote] = useState('')
  useEffect(() => setQuote(getRandomTag()), [quote])
  return <span className="text-awcy-red-400">{quote}</span>
}

export const getRandomTag = () => {
  return taglines[Math.floor(Math.random() * taglines.length)]
}


export default RT
