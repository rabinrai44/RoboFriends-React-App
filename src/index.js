import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
//Service workers as a new feature that allows our apps to become faster and potentially work ofline.
import registerServiceWorker from './registerServiceWorker';
//tachyon similar to bootstrap pre-defined class that create element a lot faster
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
        <CardList robots={robots} />
    , document.getElementById('root'));
registerServiceWorker();
