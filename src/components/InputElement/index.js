import {Component} from 'react'

import {IoIosSearch} from 'react-icons/io'

class InputElement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onKeyDown = event => {
    const {setSearchInputValue} = this.props
    const {searchInput} = this.state

    if (event.key === 'Enter') {
      setSearchInputValue(searchInput)
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="input-element-container">
        <input
          onChange={this.onChangeSearchInput}
          placeholder="search"
          type="search"
          value={searchInput}
          onKeyDown={this.onKeyDown}
        />
        <IoIosSearch />
      </div>
    )
  }
}

export default InputElement
