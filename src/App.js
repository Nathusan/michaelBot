import logo from './logo.png';
import './App.css';
import { useState } from 'react';

const michaelDictionary = [
  'Absolutely not!',
  'Cease!',
  'Incorrect.',
  'Just no.',
  'Wrong!',
  'You are dead wrong!',
  'Fuck off!'
]


const michaelThink = [
  'Let me think about that 🤔',
  'Fucking wow hold on let me think 🤔',
]


function App() {
  const [newQuestion, setNewQuestion] = useState([])

  const updateQuestions = e => {
    const copyNewQuestion = [...newQuestion];
    const input = document.getElementById('idiotsInput').value;
    
    copyNewQuestion.push(input);
    setNewQuestion(copyNewQuestion);
    thinkAboutIt();
  }

  const thinkAboutIt = () => {
    setTimeout(() => {  
      const copyNewQuestion = [...newQuestion];

      copyNewQuestion.push(michaelThink[Math.floor(Math.random() * michaelThink.length)]);
      setNewQuestion(copyNewQuestion);
    },2000)


    setTimeout(() => {  
      const copyNewQuestion = [...newQuestion];

      copyNewQuestion.push(michaelDictionary[Math.floor(Math.random() * michaelDictionary.length)]);
      setNewQuestion(copyNewQuestion);
    },4000)

    setTimeout(() => {  
      let copyNewQuestion = [...newQuestion];

      copyNewQuestion = [];
      setNewQuestion(copyNewQuestion);
    },8000)

  }

  
  const onSubmit = e => {
    if (e.code === 'Enter') {
      updateQuestions()
      
      document.getElementById("idiotsInput").value = "";
    }
  }

 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi! I am MichaelBot 😊 <br></br>
          Tell me something and I will let you know what I think about it!
        </p>
        <textarea 
          id='idiotsInput'
          rows={4}
          cols={50}
          onKeyPress={onSubmit}>
        </textarea>
        <ul className='no-Bullets'>
        {
          newQuestion.map((question, index) => {
            return(
            <div>
              <li key={index}>
                {question}
              </li>
            </div>) 
          })
        }
        </ul>
      </header>
    </div>
  );
}

export default App;
