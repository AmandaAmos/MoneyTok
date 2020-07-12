import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Date Due</th>
          <th>Amount ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell Phone Bill</td>
          <td>15th</td>
          <th>25</th>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>McDonald's</td>
          <td>3rd</td>
          <th>5.18</th>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;