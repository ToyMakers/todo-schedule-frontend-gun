import React from 'react';
import mockTodo from '../../utils/mock/mockTodo.dummy';
import { SelectDate, Todo, WriteTodo } from '../components/Scheduler';

function Schedule() {
    return (
        <div>
            <SelectDate />
            <WriteTodo />
            {mockTodo.map(val => {
                const { para, progress } = val;
                return <Todo para={para} progress={progress} />;
            })}
        </div>
    );
}

export default Schedule;
