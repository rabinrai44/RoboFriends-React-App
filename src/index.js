import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
//Service workers as a new feature that allows our apps to become faster and potentially work ofline.
import registerServiceWorker from './registerServiceWorker';
//tachyon similar to bootstrap pre-defined class that create element a lot faster
import 'tachyons';

ReactDOM.render(
        <div>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    , document.getElementById('root'));
registerServiceWorker();
