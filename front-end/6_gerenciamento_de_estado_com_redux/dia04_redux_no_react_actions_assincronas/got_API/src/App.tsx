import './App.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from './types';
import { actionFetchGOTAPI } from './redux/actions';

function App() {
  const [character, setCharacter] = useState('');
  const dispatch: Dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onChange={ ({ target }: React.ChangeEvent<HTMLInputElement>) => setCharacter(target.value) }
        value={ character }
      />
      <button
        type="button"
        onClick={ () => dispatch(actionFetchGOTAPI(character)) }
      >
        Search
      </button>
    </>
  )
}

export default App
