import React,{ Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'
import EventCard from '../card/EventCard.jsx'
import eventListStyle from './eventList.css'

// TODO, create table and calendar to show information
class EventList extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getEvents()
  }
  
  render() {
    return(
      <div className="eventListContainer">
        <div className="eventList">
          { _.map(this.props.events, (event) => { 
            let startDateTime = moment(event.startTime).add(5, 'hours')
            
            let date = startDateTime.format('D')
            let month = startDateTime.format('MMM')
            
            let startTime = startDateTime.format('LT')
            let endTime = moment(event.endTime).add(5, 'hours').format('LT')

            let venue = event.venueString || event.venue

            return <EventCard key={event.id} name={event.name} imageUrl={event.imageUrl} category={event.category} 
            venue={venue} date={date} month={month} startTime={startTime} endTime={endTime} />
            }) 
          }
        </div>
      </div>
    );
  }
}

export default EventList