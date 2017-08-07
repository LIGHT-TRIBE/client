import {FETCH_THUMBNAILS, EXPORT_MATRIX} from '../actions'

export default function databaseReducer(state = {}, action){
  switch (action.type) {
    case FETCH_THUMBNAILS:
      {const newState = {...state}
      newState.thumbnails = action.data
      return newState}
    case EXPORT_MATRIX:
      return action.payload
    default: return state;
  }
}
