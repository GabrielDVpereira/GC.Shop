import { Route, Switch} from 'react-router-dom'; 
import { Home } from '../pages/Home';
import { WishList } from '../pages/WishList';

export function Routes(){
  return(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/wishlist"  component={WishList}/>
      </Switch>
  )
}