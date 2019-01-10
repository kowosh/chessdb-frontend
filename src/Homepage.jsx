import React from 'react';
import {Link} from 'react-router-dom'

export default class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameCount: 0,
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games/count')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true, gameCount: result.count¥});
                },
                (error) => {
                    this.setState({isLoaded: true, error});
                }
            )
    }

    render() {
        if (this.state.error) {
            return <div>Error loading </div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading ...</div>
        } else {
            const games = this.state.games;
            return (
                <div className="homepage">
                    <h1>Welcome to ChessDB</h1>

                    <p>We currently have {this.state.gameCount} games in our database.
                        <Link to={{pathname: '/list'}}/>Start exploring them now</p>
                </div>
            )
        }
    }
}
