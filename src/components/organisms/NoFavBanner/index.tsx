import { Container } from './styles'
import { Banner } from '../../molecules/Banner'; 
import empty from '../../../assets/images/empty.svg'

export function NoFavBanner(){
  return(
    <Container>
      <Banner img={empty} text="There's nothing here..."/>
    </Container>
  )
}