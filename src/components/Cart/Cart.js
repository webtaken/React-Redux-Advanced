import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cart.products);
  const cartCount = useSelector((state) => state.cart.count);

  const cartItemsList = <ul>
    {cartProducts.map((item) => {
      return <CartItem
        key={item.id}
        item={{
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          total: item.quantity * item.price,
          price: item.price
        }}
      />
    })}
  </ul>;

  return (
    <>
      {<Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        {cartCount === 0 && <h3>Your Cart is empty :( try buying some products.</h3>}
        {cartItemsList}
      </Card>}
    </>
  );
};

export default Cart;
