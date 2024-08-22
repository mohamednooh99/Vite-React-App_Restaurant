import React from 'react';
import Button from '../../ui/Button';
import { delateItem } from './cartSlice';
import { useDispatch } from 'react-redux';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(delateItem(pizzaId))}>
      {' '}
      Delate{' '}
    </Button>
  );
}
