import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length>0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);

    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red': 'black'}} >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{backgroundColor: !isValid ? 'red': 'transparent', borderColor: !isValid ? 'green' : 'black'}} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
