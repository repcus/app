import React from 'react';
import {Home} from './Components/Home';
import {UsersList} from './Components/Pages/User/UsersList';
import {CarsList} from './Components/Pages/Car/CarsList'
import {RentalsList} from './Components/Pages/Rentals/RentalsList';
import {AddressesList} from './Components/Pages/Address/AddressesList'
import {UserEdit} from "./Components/Pages/User/UserEdit";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App(){
  return(
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/Home' component={Home} exact/>
                  <Route path='/User/UsersList' component={UsersList} exact/>
                  <Route path='/User/UsersList/:id' component={UserEdit} exact/>
                  <Route path='/User/UsersList/new' component={UserEdit} exact/>
                  <Route path='/Car/CarsList' component={CarsList} exact/>
                  <Route path='/Rental/RentalsList' component={RentalsList} exact/>
                  <Route path='/Address/AddressesList' component={AddressesList} exact/>
              </Switch>
          </div>
      </BrowserRouter>
  )
}