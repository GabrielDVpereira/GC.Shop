import { Container, ProductPriceAndFav } from './styles'
import { ProductDescription, ProductImage, ProductPrice, FavoriteButton} from '../../atoms'

interface ProductContentProps {
  product: {
    "id": number
    "title":string
    "price": number
    "url": string
    "isFavorite": boolean
  }
}
export function ProductContent({ product } : ProductContentProps ){

  return(
    <Container>
      <ProductImage alt={product.title} url={product.url}/>
      <ProductDescription description={product.title}/>
      <ProductPriceAndFav>
        <ProductPrice price={product.price} />
        <FavoriteButton 
          onAddFavorite={() => {}} 
          onRemoveFavorite={() => {}} 
          isFavorite={product.isFavorite}
        />
      </ProductPriceAndFav>
  
    </Container>
  )
}