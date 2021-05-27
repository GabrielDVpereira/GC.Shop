import { toast } from "react-toastify";
import { FETCH_PRODUCTS, FILTER_PRODUCTS, LOADING_PRODUCTS, REMOVE_PRODCUT_FAV, SAVE_PRODCUT_FAV } from "./actionTypes";
import { DispatchType, GetState } from "./types";
import { http } from '../../services/http'

export function fetchProductsAction(){
  return async (dispatch: DispatchType) => {

    dispatch({type: LOADING_PRODUCTS, payload: { loading: true}})
    try{
      const respose = await http.get('/products'); 
      const products = respose.body; 
      dispatch({type: FETCH_PRODUCTS, payload: { products }})
    }catch(err){
      toast.error("Something happend")
      console.log(err)
    } finally {
      dispatch({type: LOADING_PRODUCTS, payload: { loading: false }})
    }

  }
}

export function saveProductFavoriteAction(productId: number){
  return (dispatch: DispatchType) => {
    dispatch({type: SAVE_PRODCUT_FAV, payload: { productId }})
  }
}
export function removeProductFavoriteAction(productId: number){
  return (dispatch: DispatchType) => {
    dispatch({type: REMOVE_PRODCUT_FAV, payload: { productId }})
  }
}

export function filterProductsActcion(filter: string){
  return(dispatch: DispatchType ,getState: GetState) => {
    const { products:{ products } } = getState()
    
    if(!filter){
      return dispatch({type: FILTER_PRODUCTS, payload: { activeFilter: false, filteredProducts: [] }})
    }

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())); 
    dispatch({type: FILTER_PRODUCTS, payload: { activeFilter: true, filteredProducts }})
    
  }
  
}