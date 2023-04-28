import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';


const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
    const [user, setUser] = useState("");
	const [login, setLogin] = useState(true);
    const [mode, setMode] = useState(true);
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);



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

    console.log(user, login, playable);
    return (
        <>
            {login ? (<>Welcome, {user}!<Header/>
            <div className='game-container'>
                <button className="signout-button" onClick={() => setLogin(false)}> Sign Out </button>
                <Figure/>
                <WrongLetters/>
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            </div>
            <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
            <Notification showNotification={showNotification} /></>) : (
               <div className="login">
               <div className="auth-container"> 
                   <h4>Enter your Username!</h4>
                   <div className="auth-container-box">
                       <form>
                           <input type="text" className="username" onChange={e => setUser(e.target.value)} value={user}></input>
                       </form>
                       <div className="auth-options">
                           <button className="logbutton" onClick={() => setLogin(true)}> Log In </button>
                       </div>
                   </div>
               </div>
           </div>
            )}
            
        </>
    );
}

export default App;
