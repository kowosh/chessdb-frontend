import React from 'react';

import Pgn from 'chessboard';

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            event: '',
            site: '',
            date: '',
            round: '',
            white: '',
            black: '',
            result: '',
            pgn: '',
            moves: [],

            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        this.handleChange(this.props.match.params.id);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isLoaded !== nextState.isLoaded) {
            return true;
        }

        if (nextProps.match.params.id != nextState.id) {
            this.setState({isLoaded: false});
            this.handleChange(nextProps.match.params.id);
            return true;
        }

        return false;
    }

    handleChange(id) {
        fetch('http://127.0.0.1:8000/api/games/' + id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        id: result.id,
                        event: result.event,
                        site: result.site,
                        date: result.date,
                        round: result.round,
                        white: result.white,
                        black: result.black,
                        result: result.result,
                        moves: result.moves,
                        pgn: result.pgn,
                    });
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
            return (
                <div className="game">
                    foo
                    <Pgn pgn={this.state.pgn} />
                </div>
            )
        }
    }
}
