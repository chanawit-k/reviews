import { useState } from 'react'
import reviews from './data'
import Card from './assets/components/Card'
const App = () => {
  const [comments, setComments] = useState(reviews[0])
  const [index, setIndex] = useState(0)

  const nextReview = () => {
    let nextElement = index + 1
    if (reviews[nextElement]) {
      setComments(reviews[nextElement])
    } else {
      nextElement = 0
      setComments(reviews[nextElement])
    }
    setIndex(nextElement)
  }

  const prevReview = () => {
    let prevElement = index - 1
    if (prevElement < 0) {
      prevElement = reviews.length - 1
      setComments(reviews[prevElement])
    } else {
      setComments(reviews[prevElement])
    }
    setIndex(prevElement)
  }

  const randomReview = () => {
    const reviewFromRandom = reviews[Math.floor(Math.random() * reviews.length)]
    setComments(reviewFromRandom)
    setIndex(reviews.indexOf(reviewFromRandom))
  }

  return (
    <main>
      <Card
        comment={comments}
        prevReview={prevReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </main>
  )
}
export default App
