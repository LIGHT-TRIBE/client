import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'
import databaseReducer from './reducer_database'

const rootReducer = combineReducers({
  colorData: colorReducer,
  socketsData: socketsReducer,
  thumbnailsData: databaseReducer
})

export default rootReducer
