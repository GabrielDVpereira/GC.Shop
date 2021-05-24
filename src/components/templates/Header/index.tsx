import { Container, Content } from './styles'
import { HeaderSearchBar,HeaderTitle } from '../../molecules'; 
import { HeaderNav } from '../../organisms'
export function Header(){
  return(
    <Container>
      <Content>
        <HeaderTitle />
        <HeaderSearchBar />
        <HeaderNav />
      </Content>
    </Container>
  )
}