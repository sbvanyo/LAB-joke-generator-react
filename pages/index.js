import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [buttonText, setButtonText] = useState('get a joke');
  const [jokeSetup, setJokeSetup] = useState('');
  // const [jokeDelivery, setJokeDelivery] = useState('');
  const joke = getJoke();

  const handleClick = () => {
    setButtonText('get punchline');
    console.warn(joke);
  };

  const handleSetup = () => {
    setJokeSetup('test setup');
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <button type="button" onClick={() => { handleClick(); handleSetup(); }}>{buttonText}</button>
      <h2>{jokeSetup}</h2>
    </div>
  );
}

export default Home;
