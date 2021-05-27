import { Container } from './styles'
import { ProductList } from '../../components/templates'
import { LoadingBanner } from '../../components/organisms'
import { useDispatch, useSelector } from 'react-redux'
import { IReduxState } from '../../store';
import  { useEffect } from 'react';
import { fetchProductsAction } from '../../store/productsStore';

export function Home(){
  const isLoading = useSelector<IReduxState, boolean >(state => state.products.loading); 
  const hasProducts = useSelector<IReduxState, boolean>(state => !!state.products.products.length); 

  const dispatch = useDispatch(); 

  useEffect(() => {
    if(!hasProducts){
      dispatch(fetchProductsAction())
    }
  }, [dispatch, hasProducts]); 

  return(
    <>
    {
      isLoading ? (
        <LoadingBanner />
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