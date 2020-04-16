import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home.js';
import { About } from './components/aboutus/about.js';
import { Contact } from './components/contactus/contact.js';
import { NotFound } from './components/404/404.js';
import { Layout } from './components/layout/layout.js';
import { Header } from './components/header/header.js';
import { Jumbotron } from './components/jumbotron/jumbotron.js';

const App = props => {
    return (
        <>
            <Router>
                <Header />
                <Jumbotron />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </Router>
        </>
    );
}

export default App;
