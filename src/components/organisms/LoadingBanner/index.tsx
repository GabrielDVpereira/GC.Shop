
import { Container } from './styles'
import { Banner } from '../../molecules/Banner'; 
import loading from '../../../assets/images/loading.svg'

export function LoadingBanner(){
  return(
    <Container>
      <Banner img={loading} text="Loading..." />
    </Container>
  )
}