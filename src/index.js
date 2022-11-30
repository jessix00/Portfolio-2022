import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import './App.scss';

import App from './App';
import Footer from './Footer';
import Year from './Year';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)

ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Year />, document.getElementById('year'));





