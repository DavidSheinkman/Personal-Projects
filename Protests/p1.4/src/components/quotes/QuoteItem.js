import { Link } from 'react-router-dom';

import classes from './QuoteItem.module.css';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.author}</p>
        </blockquote>
        <figcaption>{props.place}</figcaption>
        <figcaption>{props.date}</figcaption>
        
      </figure>
      <Link className='btn' to={`/quotes/${props.id}`}>
        מידע נוסף
      </Link>
    </li>
  );
};

export default QuoteItem;
