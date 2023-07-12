import React, { useState } from 'react';
import getJoke from '../api/jokeData';

// getJoke().then(console.warn).catch(console.error);

function Home() {
  const [buttonText, setButtonText] = useState('get a joke');
  const [jokeSetup, setJokeSetup] = useState('');
  const [jokeDelivery, setJokeDelivery] = useState('');
  const [joke, setJoke] = useState(null);

  const handleJoke = async () => {
    try {
      if (buttonText === 'get a joke') {
        const newJoke = await getJoke();
        setJoke(newJoke);
        setJokeSetup(newJoke.setup);
      } else if (buttonText === 'get punchline' && joke) {
        setJokeDelivery(joke.delivery);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleClick = () => {
    if (buttonText === 'get a joke') {
      setButtonText('get punchline');
    } else if (buttonText === 'get punchline') {
      setButtonText('get another joke');
    } else {
      window.location.reload();
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
      <h1>BRING ON THE JOKES:</h1>
      <button type="button" onClick={() => { handleClick(); handleJoke(); }}>{buttonText}</button>
      <h2 id="setup">{jokeSetup}</h2>
      <h2 id="punchline">{jokeDelivery}</h2>
    </div>
  );
}

export default Home;
