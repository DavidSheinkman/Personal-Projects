import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, calories, id ,icon ,protein } = props;

  const addToCartHandler = () => {
    // and then send Http request
    // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        calories,
        protein
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.calories}>Calories: {calories}</div>
        </header>
        <header>
          <img className={classes.icon} src={icon} />
          <div className={classes.calories}>Protein: {protein}</div>
        </header>
          
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
