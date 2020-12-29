import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


var randInt = 0
var selected = 0

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
        </button>
    )

const Anecdote = (props) => (
    <div>{props.anecdote}</div>
    )

const Votes = (props) => (
    <div>has {props.vote} votes</div>
)

function getRandomInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    var randNumber = Math.floor(Math.random() * (max - min) + min)
    while (randInt === randNumber) {
        randNumber = Math.floor(Math.random() * (max - min) + min)
    }
    randInt = randNumber
    return randNumber
}
const anecdotes = new Map()
anecdotes.set(0, { anecdote: "If it hurts, do it more often", votes: 0 })
anecdotes.set(1, { anecdote: "Adding manpower to a late software project makes it later!", votes: 0 })
anecdotes.set(2, { anecdote: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", votes: 0 })
anecdotes.set(3, { anecdote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", votes: 0 })
anecdotes.set(4, { anecdote: "Premature optimization is the root of all evil.", votes: 0 })
anecdotes.set(5, { anecdote: "Debugging is twice as hard as writing the code in the first place.Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", votes: 0 })

const App = () => {
    const [state, setState] = useState(anecdotes)
    const [randomAnecdote, setRandomAnecdote] = useState(anecdotes.get(selected))

    const upsert = (key, value) => {
        const newMap = new Map(state)
        newMap.set(key, {anecdote: randomAnecdote.anecdote, votes: randomAnecdote.votes})
        setState(new Map(newMap))
    }

    const getRandomAnecdote = () => {
        selected = getRandomInRange(0, state.size)
        setRandomAnecdote(state.get(selected))
    }

    const voteForAnecdote = () => {
        randomAnecdote.votes += 1
        var randanecdote = randomAnecdote.anecdote
        var randanecdotevote = randomAnecdote.votes
        upsert(selected, { randanecdote, randanecdotevote})
    }
    return (
        <div>
            <Anecdote anecdote={randomAnecdote.anecdote} />
            <Votes vote={randomAnecdote.votes} />
            <Button onClick={getRandomAnecdote} text="next anecdote" />
            <Button onClick={voteForAnecdote} text="vote" />
        </div>
        )
}

/*
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
