import { createStore , combineReducers,applyMiddleware} from 'redux'
import {businessReducer} from "../pages/business-unit/redux/business.reducer";

const initialAppState = {
  sidebarShow: false,
}

const appState = (state = initialAppState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}
const allReducers = combineReducers({
  business: businessReducer,
  appState: appState,
})

const store = createStore(allReducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
