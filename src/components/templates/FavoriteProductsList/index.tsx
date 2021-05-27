import { useSelector } from 'react-redux';
import { IReduxState } from '../../../store';
import { IProduct } from '../../../store/productsStore';
import { ProductCard, NoFavBanner } from '../../organisms';
import { Container } from './styles'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';



export function FavoriteProductsList(){
  // TODO - animate the list when the user removes from fav
  let products = useSelector<IReduxState, IProduct[]>(state => {
      const isFilterActive = state.products.filterActive;
      if(isFilterActive){
          return state.products.filteredProducts.filter(product => state.products.favProductIds.includes(product.id))
      } else {
          return state.products.products.filter(product => state.products.favProductIds.includes(product.id))
      }
    });

    const renderList = () => {
       return (
        <TransitionGroup component="div">
          {products.map((product) =>(
            <CSSTransition key={product.id}timeout={700} classNames="product">
              <ProductCard product={product}/>
            </CSSTransition>
            ))
          }
        </TransitionGroup>)
    }

    const renderMessage = () => <NoFavBanner />

  return(
    <Container>
      {products.length ? renderList() : renderMessage()}
    </Container>
  )
}