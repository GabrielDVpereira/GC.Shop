import { Container } from './styles'; 
import { ProductContent } from '../../molecules'; 

interface ProductCardProps {
  product: {
    "id": number
    "title":string
    "price": number
    "url": string
  }
}

export function ProductCard({ product }: ProductCardProps){  
  return(
    <Container>
      <ProductContent product={product} />
    </Container>
  )
}