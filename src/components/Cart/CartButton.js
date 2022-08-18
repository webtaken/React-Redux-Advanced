import { useDispatch, useSelector } from 'react-redux/es/exports';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const countCart = useSelector((state) => state.cart.count);

  const toggleViewCartHandler = () => {
    dispatch(uiActions.toggleViewCart());
  };

  return (
    <button className={classes.button} onClick={toggleViewCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{countCart}</span>
    </button>
  );
};

export default CartButton;
