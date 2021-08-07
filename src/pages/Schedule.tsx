import React from 'react';
import { Link } from 'react-router-dom';
import { SelectDate } from '../components/Scheduler';

function Schedule() {
    return (
        <div>
            <SelectDate />
            <Link to="/join">가입이동</Link>
        </div>
    );
}

export default Schedule;
