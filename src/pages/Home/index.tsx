import { Container } from './styles'
import { ProductList } from '../../components/templates'
import { useDispatch, useSelector } from 'react-redux'
import { IReduxState } from '../../store';
import { useEffect } from 'react';
import { fetchProductsAction } from '../../store/productsStore';

export function Home(){
  const isLoading = useSelector<IReduxState, boolean >(state => state.products.loading); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchProductsAction())
  }, [dispatch]); 

  return(
    <>
    {
      isLoading ? (
        <h1>Loading...</h1>
      ) :(
        <Container>
          <h2>Best Smartphones in town</h2>
          <ProductList />
        </Container>
      )
    }
    </>
  )
}