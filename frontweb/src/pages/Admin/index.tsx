import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products/indext';
import './styles.css';
import Users from './Users';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
           <Products/>
          </PrivateRoute>

          <PrivateRoute path="/admin/categories">
            <h1>O CRUD de categorias está em desenvolvimento</h1>
          </PrivateRoute>

          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};
export default Admin;
