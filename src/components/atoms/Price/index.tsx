import { Value } from './styles'
import { priceFormater } from '../../../utils/formater'; 

interface PriceProps {
  price: number; 
}

export function Price({ price }: PriceProps ){
  return (  
    <Value>{priceFormater(price)}</Value>
  )
}