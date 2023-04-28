import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Board from './components/Board';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [mode, setMode] = useState(false);
  const [potentialWord, setPotentialWord] = useState("");

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  function signOut() {
    playAgain();
    setLogin(false);
    setUser("");
    setPotentialWord("");
    setMode(false);
  }

  function logIn() {
    playAgain();
    setLogin(true);
  }

  function normalMode() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setMode(true);
  }

  function uniqueMode() {
    setCorrectLetters([]);
    setWrongLetters([]);
    setMode(true);
    selectedWord = potentialWord.toLowerCase();
  }

  return (
    <div> {login ? (<>{mode ? (<><Header user={user}/>
    <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
    </div>
    <button className="signout-button" onClick={signOut}> Sign Out </button>
    <Board></Board>
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
    <Notification showNotification={showNotification}/></>) : (<>
    
        <h4>Enter the hidden word or play normally!</h4>
        <form>
			<input type="text" className="username" onChange={e => setPotentialWord(e.target.value)} value={potentialWord}></input>
		</form>
        <button className="signout-button" onClick={uniqueMode}> Select Word </button>
        <button className="signout-button" onClick={normalMode}> Normal </button>
    
    </>)}</>) : (<>
        <div className="login">
					<div className="auth-container"> 
						<h4>Enter your Username!</h4>
						<div className="auth-container-box">
							<form>
								<input type="text" className="username" onChange={e => setUser(e.target.value)} value={user}></input>
							</form>
							<div className="auth-options">
								<button className="logbutton" onClick={logIn}> Log In </button>
							</div>
						</div>
					</div>
				</div>
    </>)}
      
    </div>
  );
}

export default App;