import { Container } from './styles'
import { priceFormater } from '../../../utils/formater'; 

interface ProductPriceProps {
  price: number; 
}

export function ProductPrice({ price }: ProductPriceProps ){
  return (
    <Container>
      <span>{priceFormater(price)}</span>
    </Container>
  )
}