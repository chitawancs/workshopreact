import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/้Header'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Edit from './pages/Edit/Edit'
import Products from './pages/Products/Products';
import AddProduct from './pages/Products/AddProduct'
import EditProduct from './pages/Edit/EditProduct'
import { editProduct } from './api/api';
var routes = {
  home: '/home',
  login: '/login',
  register:'/register',
  profile: '/profile/:id',
  edit: '/edit/:id',
  product: '/product',
  addproduct: '/product/add',
  editproduct: '/product/edit/:id'
}

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
        <Redirect exact from="/" to={routes.login}></Redirect>
          <Route exact path={routes.login} component={Login}></Route>
          <Route exact path={routes.home} component={Home}></Route>
          <Route exact path={routes.register} component={Register}></Route>
          <Route exact path={routes.profile} component={Profile}></Route>
          <Route exact path={routes.edit} component={Edit}></Route>
          <Route exact path={routes.product} component={Products}></Route>
          <Route exact path={routes.addproduct} component={AddProduct}></Route>
          <Route exact path={routes.editproduct} component={EditProduct}></Route>
        </Switch>
      </div>
      <div className="container">
        <Switch>
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
