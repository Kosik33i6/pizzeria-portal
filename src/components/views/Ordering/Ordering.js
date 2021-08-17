import React from 'react';
import Order from '../Order/Order';
import {Link} from 'react-router-dom';
import styles from './Ordering.scss';

const Ordering = () => {
    return (
        <div className={styles.component}>
            <h2>Ordering</h2>
            <Link to={`${process.env.PUBLIC_URL}/ordering/order/:21`}>Order</Link>
            <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New order</Link>
        </div>
    );
}

export default Ordering;
