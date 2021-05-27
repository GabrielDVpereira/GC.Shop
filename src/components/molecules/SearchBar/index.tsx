import { Container } from './styles'; 
import {AiOutlineSearch} from 'react-icons/ai'; 
import { ChangeEvent } from 'react';

interface SearchBarProps {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export function SearchBar({ onInputChange }: SearchBarProps){
  return(
    <Container>
      <input placeholder="Search smartphones" onChange={onInputChange}/>
      <AiOutlineSearch />
    </Container>
  )
}