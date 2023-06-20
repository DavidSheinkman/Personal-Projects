import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalMealProtein = useSelector((state) => state.cart.totalMealProtein);
  const totalMealCalories = useSelector((state) => state.cart.totalMealCalories);
  

  return (
    <Card className={classes.cart}>
      <h2>Food Health:</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalCalories,
              totalp: item.totalProtein,
              calories: item.calories,
              protein: item.protein,
            }}
          />
        ))}
      </ul>
      <h3>Total Protein: {totalMealProtein}</h3>
      <h3>Total Calories: {totalMealCalories}</h3>
    </Card>
  );
};

export default Cart;
