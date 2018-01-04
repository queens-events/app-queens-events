import { connect } from 'react-redux'
import {
  initFilters,
  TOGGLE_CATEGORY_FILTER
} from '../../../actions/index'
import EventFilters from './EventFilters.jsx'

const mapStateToProps = state => {
  return state.events
}

const mapDispatchToProps = dispatch => {
  return ({
    initFilters: () => {
      dispatch(initFilters())
    },
    toggleCategory: (filterState, category) => {
      dispatch({ type: TOGGLE_CATEGORY_FILTER, filterState })
    },
    // toggleTag: (filterState, category) => {

    // }
  })
}

const EventFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(EventFilters)

export default EventFiltersContainer
