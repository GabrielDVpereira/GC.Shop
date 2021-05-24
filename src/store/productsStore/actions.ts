import { toast } from "react-toastify";
import { api } from "../../interfaces/http"
import { FETCH_PRODUCTS, LOADING_PRODUCTS, REMOVE_PRODCUT_FAV, SAVE_PRODCUT_FAV } from "./actionTypes";
import { DispatchType } from "./types";

export function fetchProductsAction(){
  return async (dispatch: DispatchType) => {

    dispatch({type: LOADING_PRODUCTS, loading: true})
    try{
      const respose = await api.get('/products'); 
      const products = respose.data; 
      dispatch({type: FETCH_PRODUCTS, products})
    }catch(err){
      toast.error("Something happend")
      console.log(err)
    } finally {
      dispatch({type: LOADING_PRODUCTS, loading: false})
    }

  }
}

export function saveProductFavoriteAction(productId: number){
  return (dispatch: DispatchType) => {
    dispatch({type: SAVE_PRODCUT_FAV, productId})
  }
}
export function removeProductFavoriteAction(productId: number){
  return (dispatch: DispatchType) => {
    dispatch({type: REMOVE_PRODCUT_FAV, productId})
  }
}