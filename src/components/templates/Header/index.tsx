import { Container, Content } from './styles'
import { SearchBar,HeaderTitle } from '../../molecules'; 
import { HeaderNav } from '../../organisms'
export function Header(){
  return(
    <Container>
      <Content>
        <HeaderTitle />
        <SearchBar />
        <HeaderNav />
      </Content>
    </Container>
  )
}