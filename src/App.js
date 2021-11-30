import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Redirect, Switch, useLocation, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Skills from './Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';

function App() {

  const location = useLocation();
  return (

    <div className="app">
      <div className=" app__container">
        <div className="row app__row">
          <div className="col-lg-3">

            <Sidebar />

          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <BrowserRouter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/skills">
                  <Skills></Skills>
                </Route>
                <Route path="/blogs">
                  <Blogs></Blogs>
                </Route>
                <Route path="/projects" component={Projects} />
                  <Projects />
                <Route path="*">
                  <Redirect to="/" />
                </Route>
              </Switch>
              </BrowserRouter>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;