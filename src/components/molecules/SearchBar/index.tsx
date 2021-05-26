import { Container } from './styles'; 
import {AiOutlineSearch} from 'react-icons/ai'; 

export function SearchBar(){
  return(
    <Container>
      <input placeholder="Search smartphones"/>
      <AiOutlineSearch />
    </Container>
  )
}