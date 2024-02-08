import './index.css'

const RatingElement = props => {
  const {eachItem, setRating} = props

  const {imageUrl, ratingId} = eachItem

  const onClickRating = () => {
    setRating(ratingId)
  }

  return (
    <li className="rating-li">
      <button onClick={onClickRating} className="rating-button" type="button">
        <img
          className="stars-image"
          alt={`rating ${ratingId}`}
          src={imageUrl}
        />
        <p>&up</p>
      </button>
    </li>
  )
}

export default RatingElement
