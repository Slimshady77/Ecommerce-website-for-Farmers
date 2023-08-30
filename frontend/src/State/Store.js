import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./Reducers/ProductReducer";

const reducer = combineReducers({
  products: productReducer,
});

let initialState = {};

const middleware = [thunk];

const Store = createStore( 
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
