import { Container } from "./styles";
import { LinkWithIcon } from "../../molecules";
import { AiFillHeart } from 'react-icons/ai'; 
import { FaUserCircle } from 'react-icons/fa'; 



export function HeaderNav(){
  return (
  <Container>
    <LinkWithIcon icon={ <AiFillHeart />} title="Wishlist" path="/wishlist" />
    <LinkWithIcon icon={ <FaUserCircle />} title="Login"  path="/"/>
  </Container>
  )
}