import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => {
    return (
        <div className={styles.component}>
            <h2>tables</h2>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking/:1`}>Booking</Link>
            <Link to={`${process.env.PUBLIC_URL}/tables/event/:2`}>Event</Link>
        </div>
    );
}

export default Tables;
