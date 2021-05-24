import { Container } from './styles'
import { ProductList } from '../../components/templates'

export function Home(){
  return(
    <Container>
      <h2>Best Smartphones in town</h2>
      <ProductList />
    </Container>
  )
}