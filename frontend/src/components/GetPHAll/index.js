import './getphall.css';

import React, { useState, useEffect } from 'react'; // Step 1: Import useEffect

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchPhs } from '../../store/phstore';

function GetPhAll() {
  const [buttonClicked, setButtonClicked] = useState(false); // Step 2: Button clicked state

  const dispatch = useDispatch();

  // Step 3: useEffect to call fetchPhs when buttonClicked state changes
  useEffect(() => {
    if (buttonClicked) {
      dispatch(fetchPhs());
    }
  }, [buttonClicked, dispatch]);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Get your past records! Isn't this fun!</button>
    </div>
  );
}

export default GetPhAll;