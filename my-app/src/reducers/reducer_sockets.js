import {IMPORT_SOCKETS_UPDATE, EXPORT_SOCKETS_UPDATE} from '../actions'
import dummyColorArray from './dummy_array_generator'

const initialState = {
  dummyArray: dummyColorArray(0),
  matrixState: dummyColorArray(0),
  numUsers: 0
}

export default function socketsReducer(state=initialState, action){
  switch(action.type){
    case IMPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.matrixState = action.data
      return newState
    }
    case EXPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.matrixState = action.data
      return newState
    }
    default:
      return state
  }
}
