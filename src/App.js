import {  useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  //! useSelector recieves the Current state automatically and then the functi
  const show = useSelector(state => state.ui.CartVisible);
  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
