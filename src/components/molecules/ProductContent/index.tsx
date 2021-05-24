import { Container } from './styles'
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

  const sliceTitle = (title: string) => {
    return title.slice(0, 60) + "..."
  }
  return(
    <Container>
      <ProductImage alt={product.title} url={product.url}/>
      <ProductDescription description={sliceTitle(product.title)}/>
      <div>
        <ProductPrice price={product.price} />
        <FavoriteButton 
          onAddFavorite={() => {}} 
          onRemoveFavorite={() => {}} 
          isFavorite={product.isFavorite}
        />
      </div>
  
    </Container>
  )
}