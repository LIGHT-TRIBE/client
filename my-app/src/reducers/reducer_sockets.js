import {IMPORT_SOCKETS_UPDATE, EXPORT_SOCKETS_UPDATE} from '../actions'
import dummyColorArray from './dummy_array_generator'

const initialState = {
  dummyArray: dummyColorArray(),
  matrixState: []
}

export default function socketsReducer(state=initialState, action){
  switch(action.type){
    case IMPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.matrixState = {...newState.matrixState}
      newState.matrixState = action.payload
      return newState
    }
    case EXPORT_SOCKETS_UPDATE:{
      const newState = {...state}
      newState.dummyArray = {...newState.dummyArray}
      newState.dummyArray = action.payload || dummyColorArray()
      return newState
    }
    default:
      return state
  }
}
