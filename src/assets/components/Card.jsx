import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Card = ({ comment, prevReview, nextReview, randomReview }) => {
  const { image, job, name, text } = comment
  return (
    <section className="review">
      <img src={image} className="img-container" alt="" />
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
    </section>
  )
}

export default Card
