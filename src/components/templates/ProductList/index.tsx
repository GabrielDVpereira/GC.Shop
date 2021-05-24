import { useSelector } from 'react-redux';
import { IReduxState } from '../../../store';
import { IProduct } from '../../../store/productsStore';
import { ProductCard } from '../../organisms';
import { Container } from './styles'; 


export function ProductList(){
  // TODO usually templates are pages, so we can use it as pages
  const products = useSelector<IReduxState, IProduct[]>(state => state.products.products); 

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