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
            <Part part={props[0].name} exercise={props[0].exercises} />
            <Part part={props[1].name} exercise={props[1].exercises} />
            <Part part={props[2].name} exercise={props[2].exercises} />
        </>
        )
};

const Total = (props) => {
    return (
        <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
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
*/
const App = () => {
    const course = "Half Stack application development";
    const parts = [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
        ]
    return (
        <div>
            <Header courseTitle={course} />
            <Content {...parts} />
            <Total {...parts} />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);