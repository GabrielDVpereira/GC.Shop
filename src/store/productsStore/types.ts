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
}

export type ProductAction  = {
  type: string
  products?: IProduct[]
  productId?: number
  loading?:boolean
}

export type DispatchType = (args: ProductAction) => ProductAction
