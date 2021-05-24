import { Container } from "./styles";
import { LoginButton, WishListButton } from "../../molecules";

export function HeaderNav(){
  return (
  <Container>
    <WishListButton />
    <LoginButton />
  </Container>
  )
}