import React from 'react';
import TablesList from '../../features/TablesList/TablesList';
// import {Link} from 'react-router-dom';
import styles from './Ordering.module.scss';


const Ordering = () => {
  console.log('Ordering: ', styles);
    return (
        <div className={styles.component}>
            <h2 className={styles.title}>Ordering</h2>
            <TablesList/>

            {/* <Link to={`${process.env.PUBLIC_URL}/ordering/order/:21`}>Order</Link> */}
            {/* <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New order</Link> */}
        </div>
    );
}

export default Ordering;
