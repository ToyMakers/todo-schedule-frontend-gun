import React from 'react';
import { Link } from 'react-router-dom';
import { SelectDate, Todo, WriteTodo } from '../components/Scheduler';

const exTodo = [
    {
        id: 1,
        para: 'Searching Company for me',
    },
    {
        id: 2,
        para: 'Take Typescript lecture',
    },
    {
        id: 3,
        para: 'Define Folder structure',
    },
];

function Schedule() {
    return (
        <div>
            <SelectDate />
            <WriteTodo />
            {exTodo.map(val => {
                const { para } = val;
                return <Todo plan={para} />;
            })}
        </div>
    );
}

export default Schedule;
