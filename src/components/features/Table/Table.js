import React from 'react';
import OrderSummary from '../OrdersList/OrderSummary';
import { Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './Table.module.scss';

const Table = (props) => {
  const {name, orders} = props;
  // console.log(orders);

  const getActiveOrders = [...orders].filter(order => order.status !== 'done' && order.status !== 'cancelled');
  console.log('getActiveOrders: ', getActiveOrders);

  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{name}</h3>
      <Button variant='contained' size='small' color='secondary'>New Order</Button>
      <ul>
        <Row>
          {getActiveOrders.map(orderData => (
            <OrderSummary
              key={orderData.id}
              {...orderData}
            />
          ))}
        </Row>
      </ul>
    </div>
  );
}

export default Table;
