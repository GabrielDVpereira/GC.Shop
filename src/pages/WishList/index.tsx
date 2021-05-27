import { Container } from './styles'
import { FavoriteProductsList } from '../../components/templates'

export function WishList(){
  
  return( 
        <Container>
          <h2>Your Wishlist</h2>
          <FavoriteProductsList />
        </Container>
      )
}