import { useCallback } from 'react';
import {
  TableProductColumns,
  TableProductPlaceholders,
  generateProduct,
} from '../entities/product';
import { Page } from '../shared/page';
import { Table } from '../shared/table';
import { TableCaption } from '../shared/table-caption';
import { Button } from '../shared/button';
import { useAppDispatch, useAppSelector } from './store';
import { getProducts, productsSlice } from './model.ts';
import { TableProduct } from './table-product.tsx';

export const ReduxState = () => {
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  const handleAddProduct = useCallback(() => {
    dispatch(productsSlice.actions.add(generateProduct()));
  }, [dispatch]);

  return (
    <Page>
      <Table>
        <TableCaption>
          <Button onClick={handleAddProduct}>Add product 🍗</Button>
          <span>Redux</span>
        </TableCaption>
        <thead>
          <TableProductColumns />
        </thead>
        <tbody>
          {products.map((product) => (
            <TableProduct key={product.id} product={product} />
          ))}
          {products.length < 1 && <TableProductPlaceholders rowsCount={1} />}
        </tbody>
      </Table>
    </Page>
  );
};
