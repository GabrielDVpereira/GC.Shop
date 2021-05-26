import { Container } from './styles'
import { ProductList } from '../../components/templates'

export function WishList(){
  
  return( 
        <Container>
          <h2>Your Wishlist</h2>
          <ProductList favorites={true} />
        </Container>
      )
}