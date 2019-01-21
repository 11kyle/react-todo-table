import React from 'react';

const TableBody = (props) => {
  const rows = props.characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <tbody>{rows}</tbody>
  );
}

export default TableBody;
