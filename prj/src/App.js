import React from 'react'
import "./App.css"
import { useState } from 'react';
import Header from './components/common/heading/Header'
import {
  BrowserRouter as Router,
  Switch, Route 
}
from "react-router-dom";
import Home from './components/home1/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Login from "./components/login/login";
import Register from "./components/register/register";


const App = () => {
  const [ user, setLoginUser] = useState({})
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
			  <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        <Route path='/team' exact component={Team} />
        <Route path='/pricing' exact component={Price} />
        <Route path='/journal' exact component={Blog} />
        <Route path='/contact-us' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>

    </>
  )
}

export default App
