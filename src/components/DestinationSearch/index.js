// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchItem: '',
  }

  onChangeSearchElement = event => {
    this.setState({searchItem: event.target.value})
  }

  render() {
    const {searchItem} = this.state
    const {destinationsList} = this.props
    const searchResultsItems = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return (
      <div className="background-container">
        <div className="images-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-bar-container">
            <input
              type="search"
              className="searchEle"
              placeholder="Search"
              value={searchItem}
              onChange={this.onChangeSearchElement}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-image"
            />
          </div>
          <ul className="destinations-list">
            {searchResultsItems.map(eachPlace => (
              <DestinationItem
                key={eachPlace.id}
                destinationItemsData={eachPlace}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
