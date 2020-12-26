import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
        </button>
    )

const Anecdote = (props) => (
    <div>{props.anecdote}</div>
    )

function getRandomInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var randNumber = Math.floor(Math.random() * (max - min) + min)
    return randNumber
}

const App = () => {
    const [selected, setSelected] = useState(0)

    const getRandomAnecdote = () => {
        setSelected(getRandomInRange(0, anecdotes.length))
    }

    return (
        <div>
            <Button onClick={getRandomAnecdote} text ="next anecdote"/>
            <Anecdote anecdote={anecdotes[selected]}/>
        </div>
        )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
