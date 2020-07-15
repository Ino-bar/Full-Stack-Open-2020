import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{ props.courseTitle }</h1>
    )
};

const Part = (props) => {
    return (
            <p>{props.part} {props.exercise}</p>
        )
}

const Content = (props) => {
    return (
        <>
        <Part part={props.part1} exercise={props.exercise1} />
        <Part part={props.part2} exercise={props.exercise2} />
        <Part part={props.part3} exercise={props.exercise3} />
        </>
        )
};

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    )
};
/*
const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header courseTitle={course} />
            <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
            <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} /> 
        </div>
    )
};
*/
const App = () => {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    };
    const part2 = {
        name: "Using props to pass data",
        exercises: 7
    };
    const part3 = {
        name: "State of a component",
        exercises: 14
    };
    return (
        <div>
            <Header courseTitle={course} />
            <Content part1={part1.name} exercise1={part1.exercises} part2={part2.name} exercise2={part2.exercises} part3={part3.name} exercise3={part3.exercises} />
            <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);