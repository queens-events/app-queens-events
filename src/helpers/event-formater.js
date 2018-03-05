import moment from 'moment'

export default {
  dateFormat(singleEvent) {
    const startDateTime = moment(singleEvent.startTime).add(5, 'hours')

    singleEvent.day = startDateTime.format('ddd')

    singleEvent.date = startDateTime.format('D')
    singleEvent.dateOrdinal = startDateTime.format('Do')
    singleEvent.month = startDateTime.format('MMM')

    singleEvent.startTimeFormatted = startDateTime.format('LT')
    singleEvent.endTimeFormatted = moment(singleEvent.endTime)
      .add(5, 'hours')
      .format('LT')

    singleEvent.venue = singleEvent.venueString || singleEvent.venue_string || singleEvent.venue

    return singleEvent
  },
}
