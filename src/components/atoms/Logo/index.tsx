import logo from '../../../assets/images/logo.svg'; 
import { Container } from './styles'

export function Logo(){
  return (
  <Container>
    <img src={logo} alt="logo"/>
  </Container>
  )
}