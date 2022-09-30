import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  state: dataReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);



 
