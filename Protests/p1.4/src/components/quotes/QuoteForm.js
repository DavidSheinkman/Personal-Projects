import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dateInputRef = useRef();
  const placeInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPlace = placeInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText , date: enteredDate , place: enteredPlace});
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>שם הפגנה</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='author'>תאריך</label>
            <input type='text' id='author' ref={dateInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='author'>מיקום</label>
            <input type='text' id='author' ref={placeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>פרטי הפגנה</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>צור הפגנה חדשה</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
