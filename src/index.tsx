import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style/global-style';

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('root')
);
