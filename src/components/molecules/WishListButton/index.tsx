import { Container } from './styles'; 
import { AiFillHeart } from 'react-icons/ai'; 

export function WishListButton(){
   // TODO make more generic and reuse for the login button
  return(
     <Container>
        <AiFillHeart />
        <span>Wishlist</span>
     </Container>
     )
}