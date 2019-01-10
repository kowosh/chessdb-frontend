import React from 'react';
import {Link} from 'react-router-dom'

export default class GameList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: {},
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/games/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({isLoaded: true, games: result.games});
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
                <div className="games-list">
                    {games.map((game) =>
                        <Link to={{pathname: "/" + game.id}} key={game.id}>
                            <span className="name">{game.id}</span>
                        </Link>)}
                </div>
            )
        }
    }
}
