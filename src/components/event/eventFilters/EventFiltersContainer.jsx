import { connect } from 'react-redux'
import {
  initFilters,
  TOGGLE_CATEGORY_FILTER,
  TOGGLE_TAG_FILTER
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
    toggleCategory: (filterState) => {
      dispatch({ type: TOGGLE_CATEGORY_FILTER, filterState })
    },
    toggleTag: (filterState) => {
      dispatch({ type: TOGGLE_TAG_FILTER, filterState })
    }
  })
}

const EventFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(EventFilters)

export default EventFiltersContainer
