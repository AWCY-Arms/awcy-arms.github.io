const weightedTaglines = [
  { w: 1, q: 'Shitposting' },
  { w: 10, q: 'DIY Firearms' },
]

export const taglines = weightedTaglines.flatMap((q) =>
  Array.from(Array(q.w)).map(() => q.q)
)

export default taglines;
