import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, totalp,calories,protein, id } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        calories,
        protein,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.calories}>
          
        {/* <img src={"https://cdn-icons-png.flaticon.com/512/1868/1868727.png"} /> */}
        </div>
      </header>
      <header>
      <h3></h3>
        <div className={classes.calories}>
          total calories: {total}{' '}
          
        </div>
      </header>
      <header>
      <h3></h3>
        <div className={classes.calories}>
          total protein: {totalp}{' '}
          
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
