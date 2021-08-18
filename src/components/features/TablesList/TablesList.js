import React from 'react';
import Table from '../Table/Table';
import styles from './TablesList.scss';

const tables = [
  {
    id: 1,
    name: 'table-1',
    maxNumberOfPeople: 5,
    orders: [
      {id: 1, tableId: 1, name: 'order-1', status: 'in progress'},
      {id: 2, tableId: 1, name: 'order-2', status: 'cancelled'},
      {id: 3, tableId: 1, name: 'order-3', status: 'in progress'},
      {id: 4, tableId: 1, name: 'order-4', status: 'done'},
    ],
  },
  {
    id: 2,
    name: 'table-2',
    maxNumberOfPeople: 4,
    orders: [
      {id: 1, tableId: 2, name: 'order-1', status: 'in progress'},
      {id: 2, tableId: 2, name: 'order-2', status: 'done'},
      {id: 3, tableId: 2, name: 'order-3', status: 'in progress'},
      {id: 4, tableId: 2, name: 'order-4', status: 'done'},
    ],
  },
  {
    id: 3,
    name: 'table-3',
    maxNumberOfPeople: 6,
    orders: [
      {id: 1, tableId: 3, name: 'order-1', status: 'in progress'},
      {id: 2, tableId: 3, name: 'order-2', status: 'done'},
      {id: 3, tableId: 3, name: 'order-3', status: 'in progress'},
      {id: 4, tableId: 3, name: 'order-4', status: 'done'},
    ],
  },
  {
    id: 4,
    name: 'table-4',
    maxNumberOfPeople: 5,
    orders: [
      {id: 1, tableId: 4, name: 'order-1', status: 'done'},
      {id: 2, tableId: 4, name: 'order-2', status: 'done'},
      {id: 3, tableId: 4, name: 'order-3', status: 'done'},
      {id: 4, tableId: 4, name: 'order-4', status: 'done'},
    ],
  },
];

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
