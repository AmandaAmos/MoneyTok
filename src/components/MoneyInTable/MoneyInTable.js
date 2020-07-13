import React from 'react';
import { Table } from 'reactstrap';


const Example = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Amount ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Chores for Grandma</td>
          <th>100</th>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Sold Game</td>
          <th>25</th>
        </tr>
      </tbody>
    </Table>
  );
}


export default Example;