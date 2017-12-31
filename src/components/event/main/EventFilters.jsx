import React, { Component } from 'react'
import DropDown from '../../DropDown.jsx';
import eventStyle from './event.css'

class EventFilters extends Component {
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
            <div className="eventFilterCategoryPill blue">
              Health
            </div>
            <div className="eventFilterCategoryPill green">
              Education
            </div>
            <div className="eventFilterCategoryPill red">
              Sports
            </div>
            <div className="eventFilterCategoryPill purple">
              Concerts
            </div>
            <div className="eventFilterCategoryPill orange">
              Arts & Theatre
            </div>
            <div className="eventFilterCategoryPill yellow">
              Socials
            </div>
          </div>
        </div>

        <div className="eventFilterTags">
          <p>Tags</p>
          <div className="eventFilterCategoryContainer">
            <div className="eventFilterCategoryPill">
              All Ages
            </div>
            <div className="eventFilterCategoryPill">
              19+ Socials
            </div>
            <div className="eventFilterCategoryPill">
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
          <DropDown />
        </div>

      </div>
    );
  }
}

export default EventFilters