import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunkMiddleware from 'redux-thunk'; 
import { productReducer } from './productsStore'; 
import { ProductState } from './productsStore/types';


export interface IReduxState {
  products: ProductState
}
const reducers = combineReducers({
  products: productReducer
}); 

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))