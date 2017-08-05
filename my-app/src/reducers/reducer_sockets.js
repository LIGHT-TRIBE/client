import {IMPORT_SOCKETS_UPDATE, EXPORT_SOCKETS_UPDATE, GET_NUMBER_USERS} from '../actions'
import dummyColorArray from './dummy_array_generator'

const initialState = {
  dummyArray: dummyColorArray(),
  matrixState: [],
  numUsers: 0
}

export default function socketsReducer(state=initialState, action){
  switch(action.type){
    case IMPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.matrixState = action.data ? action.data : dummyColorArray()
      return newState
    }
    case EXPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.matrixState = action.data
      return newState
    }
    case GET_NUMBER_USERS:{
      const newState = {...state}
      newState.numUsers = action.data
      return newState
    }
    default:
      return state
  }
}
