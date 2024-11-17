import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonView from './components/ButtonView';
import * as React from 'react';
import { render } from 'react-dom';
import PlaneView from './components/PlaneView';

function App() {
  // JS location:

  const [counter, setCounter] = useState(0); // this is my score counter
  const [timer, setTimer] = useState(15); // for timer


  const shootFunction = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
    else if (counter === 10) {
      alert("Upgrade System");
      setCounter(counter + 10)
    }
    else if (counter > 11 && counter < 100) {
      setCounter(counter + 10)
    }
    else if (counter === 100) {
      alert("Upgrade Speed");
      setCounter(counter + 100)
    }
    else if (counter > 101 && counter < 1000) {
      setCounter(counter + 100)
    }
    else if (counter === 1000) {
      alert("Upgrade Ship");
      setCounter(counter + 1000)
    }
    else if (counter > 1001 && counter < 170000) {
      setCounter(counter + 1000)
    }
    else if (counter === 170000) {
      alert("Are you sure you want to keep on playing ?!");
      setCounter(counter)
    }
  }

  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]); //timer function from Web


  // JSX Location:
  return (
    <div className="App">

      {/* Header of Game */}
      <div className='gameMainHeader'>

        {/* Game Logo */}
        <div className='gameName'>
          <img src="https://media1.giphy.com/avatars/Ozow/FusZsQuJoSz7.gif" className="game-logo" alt="game Logo" />
          <h1>
            Click Click
          </h1>
        </div>

        {/* Score of Game */}
        <div className='gamescore'>
          <img className="score-Logo" src="https://cdn.pixabay.com/animation/2022/10/27/12/57/12-57-22-874_512.gif" alt="star" />
          <p>My Score:</p>
          <h2>{counter}</h2>
        </div>

      </div>

      {/* Timer Body */}
      <div className="timer">
        <div>Countdown: {timer}</div>
      </div>

      {/* Game Body */}

      <div className='gameBody'>
        <img className='alianGif' src='https://i.giphy.com/Qs6PlzCPQ6wXyBIUe8.webp' />
      </div>

      {/* plane and shoot div*/}
      <div className='planeAndButton'>
       <PlaneView gameOver={timer === 0} handleClick={shootFunction}/>
        <ButtonView gameOver={timer === 0} handleClick={shootFunction} name={'Shoot !!'} />
      </div>
      {/* Game Cridits */}
      <div className='creditDiv'>
        This game is created by: Abdullah Al Abbas
      </div>
    </div>
  );
}

export default App;
