import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Schedule, Join } from './pages';
import { Inner, Main } from './components/common';

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <Switch>
                    <Route exact path="/" component={Schedule} />
                    <Route exact path="/join" component={Join} />
                </Switch>
            </Main>
        </>
    );
};

export default App;
