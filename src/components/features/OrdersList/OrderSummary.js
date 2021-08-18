import React from 'react';
import { Col } from 'react-flexbox-grid';
import styles from './OrderSummary.module.scss';

const OrderSummary = (props) => {
  console.log(props);
  return (
    <Col xs={3}>
      <div className={styles.component}>
        dsaads
      </div>
    </Col>
  );
}

export default OrderSummary;
