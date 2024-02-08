import './index.css'

const FilterComponent = props => {
  const {eachItem, setCategory} = props

  const {name, categoryId} = eachItem

  const onClickCategory = () => {
    setCategory(categoryId)
  }

  return (
    <li className="category-li-item">
      <button
        onClick={onClickCategory}
        className="category-button"
        type="button"
      >
        <p>{name}</p>
      </button>
    </li>
  )
}

export default FilterComponent
