import history from 'util/history';
import { Router } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Catalog from '..';

test('should render Catalog with products', async() => {
  render(
    <Router history={history}>
      <Catalog />
      );
    </Router>
  );
  
  expect(screen.getByText('Catálogo de produtos')).toBeInTheDocument();
  
  await waitFor(()=>{
    expect(screen.getByText('The Lord of the Rings')).toBeInTheDocument();
  })
});
