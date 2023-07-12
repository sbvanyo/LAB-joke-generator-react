import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [buttonText, setButtonText] = useState('get a joke');
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokeDelivery, setJokeDelivery] = useState('');
  const joke = getJoke();

  const handleClick = () => {
    console.warn(joke);
    if (buttonText === 'get a joke') {
      setButtonText('get punchline');
    } else if (buttonText === 'get punchline') {
      setButtonText('get another joke');
    } else {
      window.location.reload();
    }
  };

  const handleJoke = () => {
    if (buttonText === 'get a joke') {
      setJokeSetup('test setup');
    } else if (buttonText === 'get punchline') {
      setJokeDelivery('test punchline');
    }
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
      <button type="button" onClick={() => { handleClick(); handleJoke(); }}>{buttonText}</button>
      <h2>{jokeSetup}</h2>
      <h2>{jokeDelivery}</h2>
    </div>
  );
}

export default Home;
