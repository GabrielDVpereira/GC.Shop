import { Container } from './styles'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 

interface FavoriteButtonProps {
  isFavorite: boolean; 
  onAddFavorite: () => void; 
  onRemoveFavorite: () => void; 
}

export function FavoriteButton({isFavorite, onAddFavorite, onRemoveFavorite}: FavoriteButtonProps){
  return(
    <Container>
      {
        isFavorite ? 
          <AiFillHeart onClick={onRemoveFavorite} /> : 
          <AiOutlineHeart onClick={onAddFavorite} />
      }
    </Container>
  )
}