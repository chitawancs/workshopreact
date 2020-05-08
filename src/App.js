import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from "./helper/PrivateRoute";
import MainHeader from './components/MainHeader'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Edit from './pages/Edit/Edit'
import Products from './pages/Products/Products';
import AddProduct from './pages/Products/AddProduct'
import EditProduct from './pages/Edit/EditProduct'
import Mproduct from './pages/Products/Mproduct'
import NotFound from './pages/NotFound/NotFound'

var routes = {
  home: '/home',
  login: '/login',
  register:'/register',
  profile: '/profile/:id',
  edit: '/edit/:id',
  product: '/product',
  myproduct: '/myproduct',
  addproduct: '/product/add',
  editproduct: '/product/edit/:id'
}

function App() {
  return (
    <div>
      <MainHeader/>
      <div className="container">
        <Switch>
        <Redirect exact from="/" to={routes.login}></Redirect>
          <Route exact path={routes.login} component={Login}></Route>
          <Route exact path={routes.register} component={Register}></Route>
          
          
        </Switch>
        <Switch>
          <PrivateRoute exact path={routes.home} component={Home}></PrivateRoute>
          <PrivateRoute exact path={routes.profile} component={Profile}></PrivateRoute>
          <PrivateRoute exact path={routes.edit} component={Edit}></PrivateRoute>
          <PrivateRoute exact path={routes.myproduct} component={Mproduct}></PrivateRoute>
          <PrivateRoute exact path={routes.product} component={Products}></PrivateRoute>
          <PrivateRoute exact path={routes.addproduct} component={AddProduct}></PrivateRoute>
          <PrivateRoute exact path={routes.editproduct} component={EditProduct}></PrivateRoute>
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
