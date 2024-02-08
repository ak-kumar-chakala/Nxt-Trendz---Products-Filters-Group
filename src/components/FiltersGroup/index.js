import {Component} from 'react'

import './index.css'

import InputElement from '../InputElement'

import RatingElement from '../RatingElement'

import FilterComponent from '../FilterComponent'

class FiltersGroup extends Component {
  render() {
    const {
      categoryOptions,
      ratingsList,
      setCategory,
      setRating,
      setSearchInputValue,
    } = this.props

    const onClickFilter = () => {
      const {setFilter} = this.props

      setFilter()
    }

    return (
      <div className="filters-container">
        <InputElement setSearchInputValue={setSearchInputValue} />
        <div className="category-container">
          <h1 className="category-head">Category</h1>
          <ul className="ul-list">
            {categoryOptions.map(eachItem => (
              <FilterComponent
                setCategory={setCategory}
                eachItem={eachItem}
                key={eachItem.categoryId}
              />
            ))}
          </ul>
        </div>
        <div className="rating-elements-container">
          <h1 className="category-head">Rating</h1>
          <ul>
            {ratingsList.map(eachItem => (
              <RatingElement
                setRating={setRating}
                eachItem={eachItem}
                key={eachItem.ratingId}
              />
            ))}
          </ul>
        </div>
        <div className="clear-filters-container">
          <button
            onClick={onClickFilter}
            className="clear-button"
            type="button"
          >
            Clear Filters
          </button>
        </div>
      </div>
    )
  }
}

export default FiltersGroup
