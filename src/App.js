import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  return (
    <>
        <Header/>
        <div className='game-container'>
            <Figure/>
            <WrongLetters/>
            <Word/>
        </div>
        
    </>
  );
}

export default App;
