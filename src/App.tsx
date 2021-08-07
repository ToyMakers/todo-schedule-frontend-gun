import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Schedule, Join } from './pages';
import Inner from './components/common/Inner';

const App = () => {
    return (
        <>
            <Header />
            <Inner>
                <Switch>
                    <Route exact path="/" component={Schedule} />
                    <Route exact path="/join" component={Join} />
                </Switch>
            </Inner>
        </>
    );
};

export default App;
