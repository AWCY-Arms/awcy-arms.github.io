import { useEffect, useState } from 'react'
import { quotes } from '../data/quotes'

const Quote = () => {
  const [quote, setQuote] = useState('')
  useEffect(() => setQuote(getRandomQuote()), [quote])
  return <span>{quote}</span>
}

export const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export default Quote
