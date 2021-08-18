export const tables = [
  {
    id: 1,
    name: 'table-1',
    maxNumberOfPeople: 5,
    orders: [
      {id: 1, tableId: 1, name: 'order-1', status: 'in progress', price: '16.99'},
      {id: 2, tableId: 1, name: 'order-2', status: 'cancelled', price: '13.99'},
      {id: 3, tableId: 1, name: 'order-3', status: 'in progress', price: '19.99'},
      {id: 4, tableId: 1, name: 'order-4', status: 'done', price: '20.99'},
    ],
  },
  {
    id: 2,
    name: 'table-2',
    maxNumberOfPeople: 4,
    orders: [
      {id: 1, tableId: 2, name: 'order-1', status: 'in progress', price: '13.99'},
      {id: 2, tableId: 2, name: 'order-2', status: 'done', price: '13.99'},
      {id: 3, tableId: 2, name: 'order-3', status: 'in progress', price: '13.99'},
      {id: 4, tableId: 2, name: 'order-4', status: 'done', price: '13.99'},
    ],
  },
  {
    id: 3,
    name: 'table-3',
    maxNumberOfPeople: 6,
    orders: [
      {id: 1, tableId: 3, name: 'order-1', status: 'in progress', price: '17.99'},
      {id: 2, tableId: 3, name: 'order-2', status: 'active', price: '23.99'},
      {id: 3, tableId: 3, name: 'order-3', status: 'in progress', price: '18.99'},
      {id: 4, tableId: 3, name: 'order-4', status: 'done', price: '14.99'},
    ],
  },
  {
    id: 4,
    name: 'table-4',
    maxNumberOfPeople: 5,
    orders: [
      {id: 1, tableId: 4, name: 'order-1', status: 'active', price: '16.99'},
      {id: 2, tableId: 4, name: 'order-2', status: 'active', price: '23.99'},
      {id: 3, tableId: 4, name: 'order-3', status: 'active', price: '13.99'},
      {id: 4, tableId: 4, name: 'order-4', status: 'done', price: '15.99'},
    ],
  },
];
