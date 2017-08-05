import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'

const rootReducer = combineReducers({
  colorData: colorReducer,
  socketsData: socketsReducer
})

export default rootReducer
