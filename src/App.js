import React from "react";
import AppointmentPage from "./pages/AppointmentPage";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import {NavBar} from "./components/NavBar"

function App() {

return (
  <>


  <Router>
    <NavBar />

    <Route exact path="/">
      <HomePage />
    </Route>

    <Route exact path="/appointments">
      <AppointmentPage />
    </Route>

  </Router>
  </>
)

}

export default App;
