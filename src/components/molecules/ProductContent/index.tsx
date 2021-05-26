import { Container, ProductPriceAndFav } from './styles'
import { Description, ProductImage, Price, FavoriteButton} from '../../atoms'
import { useDispatch, useSelector } from 'react-redux';
import { IReduxState } from '../../../store';
import { removeProductFavoriteAction, saveProductFavoriteAction } from '../../../store/productsStore/actions';

interface ProductContentProps {
  product: {
    "id": number
    "title":string
    "price": number
    "url": string
  }
}
export function ProductContent({ product } : ProductContentProps ){

  const favoriteProductIs = useSelector<IReduxState, number[]>(state => state.products.favProductIds)
  const dispatch = useDispatch(); 
  
  // TODO wrong, we shouldnt have business logic inside a molecule, because it makes it not reusable
  const onRemoveFavorite = (): void => {
    dispatch(removeProductFavoriteAction(product.id))
  }
  const onAddFavorite = (): void => {
    dispatch(saveProductFavoriteAction(product.id))

  }

  const checkIfIsFav = (id:number): boolean => {
    return favoriteProductIs.includes(id); 
  }
  
  return(
    <Container>
      <ProductImage alt={product.title} url={product.url}/>
      <Description description={product.title} textLimit={50} className="dark"/>
      <ProductPriceAndFav>
        <Price price={product.price} />
        <FavoriteButton 
          onAddFavorite={onAddFavorite} 
          onRemoveFavorite={onRemoveFavorite} 
          isFavorite={checkIfIsFav(product.id)}
        />
      </ProductPriceAndFav>
  
    </Container>
  )
}