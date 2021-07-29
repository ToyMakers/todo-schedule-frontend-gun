import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import { Schedule, Join } from './pages';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Schedule} />
                <Route exact path="/join" component={Join} />
            </Switch>
        </>
    );
};

export default App;
