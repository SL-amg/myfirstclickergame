import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ButtonView from './components/ButtonView';

function App() {
// JS location:

const [counter, setCounter] = useState(0); // this is my score counter

const shootFunction=() =>{
  if(counter <10) {
    setCounter(counter+1)
  }
  else if (counter ===10){
    alert("Upgrade System");
    setCounter(counter+10)
  }
  else if(counter > 11 && counter <100){
    setCounter(counter+10)
  }
  else if (counter ===100){
    alert("Upgrade Speed");
    setCounter(counter+100)
  }
  else if(counter > 101 && counter <1000){
    setCounter(counter+100)
  }
  else if (counter ===1000){
    alert("Upgrade Ship");
    setCounter(counter+1000)
  }
  else if(counter > 1001 && counter <170000){
    setCounter(counter+1000)
  }
  else if(counter === 170000 ){
    alert("Are you sure you want to keep on playing ?!");
    setCounter(counter)
  }
}

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

       {/* Game Body */}
       <div className='gameBody'>
        <img className='alianGif' src='https://media4.giphy.com/media/Qs6PlzCPQ6wXyBIUe8/giphy.gif?cid=6c09b952k4kzt02ed2vcmbi4if0a3o78nebzgsacdwrj6icr&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' />
       </div>

       {/* plane and shoot div*/}
       <div className='planeAndButton'>
        <img src='https://s3.amazonaws.com/cartoonsmartstreaming/wp-content/uploads/2014/12/05002726/veering.png' />
       <ButtonView handleClick={shootFunction} name={'Shoot !!'}/>
       </div>
       {/* Game Cridits */}
       <div className='creditDiv'>
        This game is created by: Abdullah Al Abbas
       </div>

    </div>
  );
}

export default App;
