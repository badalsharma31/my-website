import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home";
import About from "../src/Components/About";
import Blog from "../src/Components/Blog";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/" component={Home}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
