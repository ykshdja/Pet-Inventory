


import React from "react";
import { BrowserRouter as Router, Switch, Route,NavLink, Link} from "react-router-dom";
import './App.css';
import Image from "./img3.png";
import Image2 from "./Capture.png";
import API from "./API.js";
import EditPage from './components/Edit';
import PetTable from './components/Pertable';
import SearchPage from './components/SearchPage';
import Footer from './common/Footer';
import Header from "./common/Header";
import AboutPage from './common/About';

/**
 * I Yash Khanduja, 000826385 hereby certify that this material is my own work and that I have not copied it from anyone.
 */

class App extends React.Component{
  render()
  {
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route exact path = "/">
              <Header title="Home">welcome to Pet Land</Header>
              <HomePage/>
              <Footer/>
            </Route>

            <Route exact path = "/about">
              <Header title="About">About</Header>
            <AboutPage/>
            <Footer/>
            </Route>

            <Route  exact path = "/search">
              <Header title="Search">
                Search
              </Header>
              <SearchPage/>
              <Footer/>
            </Route>
            <Route exact path = "/edit">
              <Header  className="header-edit"  title="Edit">Edit</Header>
            <EditPage/>
            <Footer/>
            </Route>
          </Switch>

        </div>
      </Router>
    )
  };
  componentDidMount()
  {
    document.title = "Welcome to Pet Land";
  }
  
}

class HomePage extends React.Component{
  componentDidMount(){
    document.title = "Home";
  }
  render()
  {
    return(
      <div> 
   <img  src={Image2} width="100%" height="100%" alt="Capture" ></img>
      </div>
    );
  }
  
}






  

export default App;
