const Header = props => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = props => {
	return (
		<div className="player">
			<span className="player-name">
			<button className="remove-player" onClick={ ()=> props.removePlayer(props.id) }>✖</button>
			{props.name}</span>
			<Counter />
		</div>
	);
};

//State class
class Counter extends React.Component {
	//Shorter
	state = {
		score: 0
	};
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		score:0
	// 	};
	// }

	//Must bind methods with "this", I'm using arrow function

	//setState is a react method that allows to change state
	incrementScore = () => {
		this.setState(prevState => ({
			score: prevState.score + 1
		}));
	};

	decrementScore = () => {
		this.setState(prevState => ({
			score: this.state.score - 1
		}));
	};

	render() {
		return (
			<div className="counter">
				<button
					className="counter-action decrement"
					onClick={this.decrementScore}
				>
					{" "}
					-{" "}
				</button>
				<span className="counter-score"> {this.state.score}</span>
				<button
					className="counter-action increment"
					onClick={this.incrementScore}
				>
					{" "}
					+{" "}
				</button>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		players: [
			{
				name: "Kevin",
				id: 1
			},
			{
				name: "CJ",
				id: 2
			},
			{
				name: "Tony Vercetti",
				id: 3
			},
			{
				name: "Big Smoke",
				id: 4
			}
		]
	};

	handleRemovePlayer = id => {
		this.setState(prevState => {
			return {
				players: prevState.players.filter( p => p.id !== id )
			};
		});
	};

	render() {
		return (
			<div className="scoreboard">
				<Header
					title="Scoreboard"
					totalPlayers={this.state.players.length}
				/>

				{/*Players List*/}
				{this.state.players.map(player => (
					<Player name={player.name} id={player.id} key={player.id.toString()} removePlayer={this.handleRemovePlayer} />
				))}
			</div>
		);
	}
}
//Conects to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
