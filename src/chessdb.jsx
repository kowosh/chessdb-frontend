// require('../../assets/sass/app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

import GameList from './GameList.jsx';
import Game from './Game.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={GameList}/>
                <Route exact path="/:id" component={Game}/>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('chessdb'));
