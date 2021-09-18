import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Schedule, Join, Login } from './pages';
import { Main } from './components/common';

const App = () => {
    return (
        <>
            <Header login={false} />
            <Main>
                <Switch>
                    <Route exact path="/" component={Schedule} />
                    <Route exact path="/join" component={Join} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Main>
        </>
    );
};

export default App;
