import { FETCH_PRODUCTS, FILTER_PRODUCTS, LOADING_PRODUCTS, REMOVE_PRODCUT_FAV, SAVE_PRODCUT_FAV } from "./actionTypes";
import { ProductState, ProductAction } from "./types";

const initialState: ProductState = {
  products: [], 
  favProductIds: [], 
  filteredProducts: [],
  filterActive: false,
  loading: false
}

export const reducer = (state  = initialState, action: ProductAction): ProductState => {
  switch(action.type){
    case FETCH_PRODUCTS:
      return {...state, products: action.payload?.products || []}
    case LOADING_PRODUCTS:
      return {...state, loading: action.payload?.loading || false}
    case SAVE_PRODCUT_FAV: 
      const newFavProductsIs  =action.payload?.productId ?  [...state.favProductIds, action.payload.productId] : state.favProductIds
      return {...state, favProductIds: newFavProductsIs }
    case REMOVE_PRODCUT_FAV: 
      const removedFavProductIds  = action.payload?.productId ?  state.favProductIds.filter(id => id !==  action.payload?.productId ) : state.favProductIds
      return {...state, favProductIds: removedFavProductIds }
    case FILTER_PRODUCTS:
      return {...state, filterActive: !!action.payload?.activeFilter, filteredProducts: action.payload?.filteredProducts || [] }
    default:
      return state
  }
}