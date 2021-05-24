import { Container } from './styles'
import { FaUserCircle } from 'react-icons/fa'; 

export function LoginButton(){
  return(
    <Container>
      <FaUserCircle />
      <span>Login</span>
    </Container>
  )
}