import React from 'react';
import Table from '../Table/Table';
import {tables} from '../../../data/tables.js';
import styles from './TablesList.module.scss';

const TablesList = () => {

  return (
    <div className={styles.component}>
      {tables.map(tableData => (
        <Table
          key={tableData.id}
          {...tableData}
        />
      ))}
    </div>
  );
}

export default TablesList;
