import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
//Service workers as a new feature that allows our apps to become faster and potentially work ofline.
import registerServiceWorker from './registerServiceWorker';
//tachyon similar to bootstrap pre-defined class that create element a lot faster
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
        <div>
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
            <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} />
        </div>
    , document.getElementById('root'));
registerServiceWorker();
