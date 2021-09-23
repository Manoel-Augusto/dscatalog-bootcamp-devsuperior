import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import ProductCard from '../../components/ProductCard';
import CardLoader from './CardLoader';
import './styles.css';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: pageNumber,
        size: 12,
      },
    };
    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProducts(0);
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalogo-title-container">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        {isLoading ? (
          <CardLoader />
        ) : (
          page?.content.map((product) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to="/products/1">
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div>AVISO! a primeira requisição pode demorar alguns segundos pois por padrão o servidor da API fica em modo 'sleep'</div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={getProducts}
        />
      </div>
    </div>
  );
};
export default Catalog;
