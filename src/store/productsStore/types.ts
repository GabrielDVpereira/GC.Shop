import { IReduxState } from ".."

export type IProduct =  {
    id: number
    title: string
    price: number
    url: string
}

export type ProductState  = {
  products: IProduct[]
  favProductIds: number[]
  loading: boolean
  filteredProducts: IProduct[]
  filterActive: boolean
}

export type ProductAction  = {
  type: string
  payload?: {
    products?: IProduct[]
    productId?: number
    loading?:boolean
    search?: string
    activeFilter?: boolean
    filteredProducts?: IProduct[]
  }
}

export type GetState = () => IReduxState

export type DispatchType = (args: ProductAction) => ProductAction
