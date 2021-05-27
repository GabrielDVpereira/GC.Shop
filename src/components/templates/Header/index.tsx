import { Container, Content } from './styles'
import { SearchBar,HeaderTitle } from '../../molecules'; 
import { HeaderNav } from '../../organisms'
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { filterProductsActcion } from '../../../store/productsStore'

export function Header(){
  const dispatch = useDispatch(); 

  const onUserSearch = (event:  ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value; 
    dispatch(filterProductsActcion(filter))
  }
  
  return(
    <Container>
      <Content>
        <HeaderTitle />
        <SearchBar onInputChange={onUserSearch} />
        <HeaderNav />
      </Content>
    </Container>
  )
}