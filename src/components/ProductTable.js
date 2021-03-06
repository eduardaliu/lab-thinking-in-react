import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        <ProductRow filtered={props.filtered} />
      </tbody>
    </table>
  );
};

export default ProductTable;
