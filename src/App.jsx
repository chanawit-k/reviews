import { useState } from 'react'
import reviews from './data'
import Card from './assets/components/Card'
const App = () => {
  const [comments, setComments] = useState(reviews[0])
  const [index, setIndex] = useState(0)

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0
    } else if (number < 0) {
      return reviews.length - 1
    } else {
      return number
    }
  }

  const nextReview = () => {
    setIndex((currentIndex) => {
      let nexIndex = checkNumber(currentIndex + 1)
      setComments(reviews[nexIndex])
      return nexIndex
    })
  }

  const prevReview = () => {
    setIndex((currentIndex) => {
      let prevIndex = checkNumber(currentIndex - 1)
      setComments(reviews[prevIndex])
      return prevIndex
    })
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
