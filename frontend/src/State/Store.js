import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./Reducers/ProductReducer";
import { amountReducer } from "./Reducers/amountReducer";

const reducer = combineReducers({
  products: productReducer,
  amount: amountReducer,
});

const initialState = {
  loading: false,
  products: [],
  productCount: 0,
  error: null,
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
