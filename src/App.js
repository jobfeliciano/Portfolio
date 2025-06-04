//Imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//Création du composant
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/a-propos" exact component={About}/>
      </Switch>
    </BrowserRouter>
  )
}

//Export du composant
export default App;