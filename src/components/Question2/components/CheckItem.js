import React from 'react';

export default function CheckItem({ checkProps, text, disable }) {
  return (
    <tr>
      <td>{!disable && <input {...checkProps} type='checkbox' />}</td>
      <td></td>
      <td>{text}</td>
    </tr>
  );
}
