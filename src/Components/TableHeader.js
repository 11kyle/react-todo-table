import React from 'react';

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col" colSpan="2">Job</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
