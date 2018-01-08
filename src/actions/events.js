import axios from 'axios'
import authHTTP from '../middleware/authHTTP'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const EDIT_EVENT = 'EDIT_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const TOGGLE_CREATE_EVENT_HIDDEN = 'TOGGLE_CREATE_EVENT_HIDDEN'

export const toggleCreateEventHidden = () => {
  return { type: TOGGLE_CREATE_EVENT_HIDDEN }
}