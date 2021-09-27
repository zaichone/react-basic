import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './comps/Home';
import Test from './comps/Test';
import Orders from './comps/Orders';
import Order from './comps/Order';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/:id" children={<Order />} />
    </Router>
  );
}

export default App;
