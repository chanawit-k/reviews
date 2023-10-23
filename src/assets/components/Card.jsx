import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Card = ({ comment, prevReview, nextReview, randomReview }) => {
  const { image, job, name, text } = comment
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type="button" className="prev-btn" onClick={prevReview}>
          <FaChevronLeft className="beer" />
        </button>
        <button type="button" className="next-btn" onClick={nextReview}>
          <FaChevronRight className="beer" />
        </button>
      </div>
      <button type="button" className="btn" onClick={randomReview}>
        Surprise me
      </button>
    </article>
  )
}

export default Card
