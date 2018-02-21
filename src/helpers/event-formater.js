import moment from 'moment'

export default {
  dateFormat(singleEvent) {
    const startDateTime = moment(singleEvent.startTime).add(5, 'hours')

    singleEvent.date = startDateTime.format('D')
    singleEvent.month = startDateTime.format('MMM')

    singleEvent.startTime = startDateTime.format('LT')
    singleEvent.endTime = moment(singleEvent.endTime)
      .add(5, 'hours')
      .format('LT')

    singleEvent.venue = singleEvent.venueString || singleEvent.venue

    return singleEvent
  },
}
