import { Container } from './styles'; 
import { AiFillHeart } from 'react-icons/ai'; 

export function WishListButton(){
      
  return(
     <Container>
        <AiFillHeart />
        <span>Wishlist</span>
     </Container>
     )
}