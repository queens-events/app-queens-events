import React, { Component } from 'react'
import DropDown from '../../DropDown.jsx';
import classNames from 'classnames'
import EventAdd from '../eventAdd/EventAddContainer.jsx'

import eventFiltersStyle from './eventFilters.css'

class EventFilters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonCategories: {
        HEALTH: true,
        EDUCATION: true,
        SPORTS: true,
        CONCERTS: true,
        ARTS_AND_THEATER: true,
        SOCIALS: true
      },
      buttonTag: {
        ALL_AGES: true,
        '19+_SOCIALS': true,
        FREE: true
      }
    }
  }

  componentWillMount() {
    this.props.initFilters()
  }
  
  onCategoryClick(buttonState, category){
    buttonState[category] = !buttonState[category]
    this.props.toggleCategory(buttonState)
    this.setState(buttonState)
  }

  onTagClick(buttonState, category){
    buttonState[category] = !buttonState[category]
    this.props.toggleTag(buttonState)
    this.setState(buttonState)
  }
  
  render() {
    return(
      <div className="eventFilters">
        <div className="eventFilterList">
          <p>Filter List</p>
          <button className="eventFilterButton">Card</button>
          <button className="eventFilterButton">Calendar</button>
        </div>

        <div className="eventFilterCategories">
          <p>Categories</p>
          <div className="eventFilterCategoryContainer">
            <div id="HEALTH" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'HEALTH')}
            className={ classNames('eventFilterCategoryPill', { 'blue': this.state.buttonCategories.HEALTH }) }>
              Health
            </div>
            <div id="EDUCATION" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'EDUCATION')}
            className={ classNames('eventFilterCategoryPill', { 'green': this.state.buttonCategories.EDUCATION }) }>
              Education
            </div>
            <div id="SPORTS" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'SPORTS')}
            className={ classNames('eventFilterCategoryPill', { 'red': this.state.buttonCategories.SPORTS }) }>
              Sports
            </div>
            <div id="CONCERTS" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'CONCERTS')}
            className={ classNames('eventFilterCategoryPill', { 'purple': this.state.buttonCategories.CONCERTS }) }>
              Concerts
            </div>
            <div id="ARTS_AND_THEATER" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'ARTS_AND_THEATER')}
            className={ classNames('eventFilterCategoryPill', { 'orange': this.state.buttonCategories.ARTS_AND_THEATER }) }>
              Arts & Theatre
            </div>
            <div id="SOCIALS" onClick={() => this.onCategoryClick(this.state.buttonCategories, 'SOCIALS')}
            className={ classNames('eventFilterCategoryPill', { 'yellow': this.state.buttonCategories.SOCIALS }) }>
              Socials
            </div>
          </div>
        </div>

        <div className="eventFilterTags">
          <p>Tags</p>
          <div className="eventFilterCategoryContainer">
            <div id="ALL_AGES" onClick={() => this.onTagClick(this.state.buttonTag, 'ALL_AGES')}
              className={ classNames('eventFilterCategoryPill', { 'qe-blue': this.state.buttonTag.ALL_AGES }) }>
              All Ages
            </div>
            <div id="19+_SOCIALS" onClick={() => this.onTagClick(this.state.buttonTag, '19+_SOCIALS')}
              className={ classNames('eventFilterCategoryPill', { 'qe-blue': this.state.buttonTag['19+_SOCIALS'] }) }>
              19+ Socials
            </div>
            <div id="FREE" onClick={() => this.onTagClick(this.state.buttonTag, 'FREE')}
              className={ classNames('eventFilterCategoryPill', { 'qe-blue': this.state.buttonTag.FREE }) }>
              FREE
            </div>
          </div>
        </div>

        <div className="eventFilterSortBy">
          <p>Sort By</p>
          <div className="eventFilterSortByContainer">
            <form>
              <label>
                <input type="radio" id="choice1" name="sortby" value="Popular"/>Popular
              </label>

              <label>
                <input type="radio" id="choice2" name="sortby" value="Soon"/>Soon
              </label>
              
              <label>
                <input type="radio" id="choice3" name="sortby" value="Distance"/>Distance
              </label>
            </form>
          </div>
        </div>

        <div className="eventFilterVenue">
          <p>Venue</p>
          <select >
            
          </select>
        </div>
        <div className="eventFilterAddEvent">
          <EventAdd />
        </div>
      </div>
    );
  }
}

export default EventFilters