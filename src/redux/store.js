import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  data: dataReducer,
});

const persistedState = localStorage.getItem('reduxState') 
? JSON.parse(localStorage.getItem('reduxState'))
: {} 

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

 
