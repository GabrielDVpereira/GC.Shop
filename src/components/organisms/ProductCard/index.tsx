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
  const newProduct = {...product, isFavorite: true}
  return(
    <Container>
      <ProductContent product={newProduct} />
    </Container>
  )
}