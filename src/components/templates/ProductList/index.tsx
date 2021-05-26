import { useSelector } from 'react-redux';
import { IReduxState } from '../../../store';
import { IProduct } from '../../../store/productsStore';
import { ProductCard } from '../../organisms';
import { Container } from './styles'; 

interface ProductListProps {
  favorites?: boolean
}

export function ProductList({ favorites = false } : ProductListProps){
  // TODO usually templates are pages, so we can use it as pages
  let products = useSelector<IReduxState, IProduct[]>(state =>{
      if(favorites){
        return state.products.products.filter(product => state.products.favProductIds.includes(product.id))
      }
      return state.products.products
    });

  return(
    <Container>
      {
        products.map((product) => {
          return <ProductCard key={product.id} product={product}/>
        })
      }
    </Container>
  )
}