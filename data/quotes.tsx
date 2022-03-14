const weightedQuotes = [
  { w: 1, q: "I'm feeling fat, and sassy" },
  { w: 1, q: 'My hovercraft is full of eels' },
  { w: 1, q: 'Negative, I am a meat popsicle' },
  { w: 1, q: 'One, two, five!' },
  { w: 1, q: "Shiny. Let's be bad guys." },
  { w: 1, q: "Wow!" },

  { w: 2, q: 'Your sights are on backwards' },

  { w: 3, q: "Can't stop the signal" },
  { w: 3, q: 'COME AND TAKE IT' },
  { w: 3, q: 'NO STEP ON SNEK' },
  { w: 3, q: 'Repeal the NFA' },
  { w: 3, q: 'Sic semper tyrannis' },
  { w: 3, q: 'You guys are complying?' },

  { w: 4, q: 'Are We Cool Yet?' },
  { w: 4, q: 'Made with ❤️ from behind enemy lines' },
  { w: 4, q: 'Made with ❤️ in a 2A sanctuary' },
]

export const quotes = weightedQuotes.flatMap((q) =>
  Array.from(Array(q.w)).map(() => q.q)
)

export default quotes
