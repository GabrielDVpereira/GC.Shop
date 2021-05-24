import { FETCH_PRODUCTS, LOADING_PRODUCTS, REMOVE_PRODCUT_FAV, SAVE_PRODCUT_FAV } from "./actionTypes";
import { ProductState, ProductAction } from "./types";

const initialState: ProductState = {
  products: [], 
  favProductIds: [], 
  loading: false
}

export const reducer = (state  = initialState, action: ProductAction): ProductState => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, products: action.products || []}
    case LOADING_PRODUCTS:
      return {...state, loading: action.loading || false}
    case SAVE_PRODCUT_FAV: 
      const newFavProductsIs  =action.productId ?  [...state.favProductIds, action.productId] : state.favProductIds
      return {...state, favProductIds: newFavProductsIs }
    case REMOVE_PRODCUT_FAV: 
      const removedFavProductIds  = action.productId ?  state.favProductIds.filter(id => id !==  action.productId ) : state.favProductIds
      return {...state, favProductIds: removedFavProductIds }
    default:
      return state
  }
}