import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


var sumTotal

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Total = props => {
    sumTotal = props.good + props.neutral + props.bad
    return sumTotal
}

const Average = props => {
    if (props.good === 0 && props.bad === 0) {
        return(0)
    }
    return ((props.good - props.bad) / sumTotal)
}

const Positive = props => {
    if (props.good === 0) {
        return (0)
    }
    return ((props.good / sumTotal) * 100 + "%")
}

const Statistic = props => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = props => {
    if (Total(props.all) === 0) {
        return (
            <>
            <p>No feedback given</p>
            </>
                )
    }
    return (
        <table>
            <Statistic text="good " value={props.good} />
            <Statistic text="neutral " value={props.neutral} />
            <Statistic text="bad " value={props.bad} />
            <Statistic text="total " value={Total(props.all)} />
            <Statistic text="average " value={Average(props.all)} />
            <Statistic text="positive " value={Positive(props.all)} />
        </table>
        )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = {good, bad, neutral} 
    return (
        <>
            <h1>
                give feedback
            </h1>
            <Button handleClick={() => setGood(good => good + 1)} text ="good" />
            <Button handleClick={() => setNeutral(neutral => neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad => bad + 1)} text="bad" />
            <h1>
                statistics
            </h1>
            <Statistics good={good} bad={bad} neutral={neutral} all={all} />
        </>
    )
}

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
