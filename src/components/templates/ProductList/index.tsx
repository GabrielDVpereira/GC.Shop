import { useSelector } from 'react-redux';
import { IReduxState } from '../../../store';
import { IProduct } from '../../../store/productsStore';
import { ProductCard, NoFavBanner } from '../../organisms';
import { Container } from './styles'; 

interface ProductListProps {
  favorites?: boolean
}

export function ProductList({ favorites = false } : ProductListProps){
  let products = useSelector<IReduxState, IProduct[]>(state => {
      const isFilterActive = state.products.filterActive; 
      if(isFilterActive){
        return state.products.filteredProducts
      } 
      return state.products.products
    });

    const renderList = () => {
      return products.map((product) => <ProductCard key={product.id} product={product}/>)
    }

    const renderMessage = () => <NoFavBanner />

  return(
    <Container>
      {products.length ? renderList() : renderMessage()}
    </Container>
  )
}