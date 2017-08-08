import {FETCH_THUMBNAILS, EXPORT_MATRIX} from '../actions'
import dummyColorArray from './dummy_array_generator'

const initialState = {
  thumbnails:[dummyColorArray(Math.floor(Math.random()*255)),dummyColorArray(Math.floor(Math.random()*255))]
}

export default function databaseReducer(state = {}, action){
  switch (action.type) {
    case FETCH_THUMBNAILS:
      {const newState = {...state}
      newState.thumbnails = action.payload
      return newState}
    case EXPORT_MATRIX:
      return action.payload
    default: return state;
  }
}
