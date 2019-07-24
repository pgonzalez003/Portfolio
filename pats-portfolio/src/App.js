import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Resume from "./pages/Resume"

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/Work" component={Work} />
          <Route exact path="/Resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
