import React from 'react';
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import Navbar from './Components/Navbar'
import './App.css'

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Switch> {/* to avoid print Error page at each page */}
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        {/* /rooms/+anything can go to singleroom page */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
