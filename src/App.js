import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Topbar from "./components/topbar";
import Product from "./components/product";
import About from "./components/about";
import Contact from "./components/contactus";
import TermCondition from "./components/termsncondition";
import PrivacyPolicy from "./components/privacy-policy";
// Browser Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (

    <Router>
      <Topbar />
      <Header />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
       <About />
        </Route>
        <Route path="/termscondition">
          <TermCondition />
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/contact">
         <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
