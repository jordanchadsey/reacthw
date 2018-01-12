import React, {Component} from "react";
import Header from "./components/Header";
import Score from "./components/Header";
import HighScore from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./pokemon.json";
//going to import other stuff like score from header

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

class App extends Component {
	state = {
		characters: characters,
		shuffle: false,
		score: 0,
		highScore: 0,
		message:""
	}

	handleIncrement = () => {
		this.setState({
			score: this.state.score + 1
		});
	}

	restartGame = () => {
		this.setState({score : 0});
		const selectedImg = this.state.characters.filter(item => item.picked === true);
		const imageStateReset = selectedImg.map(item => item.picked = false);
		shuffle(this.state.characters);
		this.setState({shuffle:true});
	}

	cardPicked = id => {
		const pickedCard = this.state.characters.filter(card => card.id === id);

		if (pickedCard[0].picked === true) {
			this.setState({message: "lol u suuuck. try again, noob"});

			this.restartGame();
		}
		else if (this.state.score > 9) {
			this.setState({highScore: this.state.score});
			this.setState({message: "new high score, not bad for a noob"});

			this.restartGame();
		}

		else {
			this.handleIncrement();
			this.shuffle(this.state.characters);
			pickedCard[0].picked = true;
			this.setState({shuffle: true});
			this.setState({message:""});
		}
	}

	render(){
		return(
			<div>
				<Header
				score={this.state.score}
				highScore={this.state.highScore}
				message={this.state.message} />

				<Wrapper>
					{this.state.characters.map(character =>(
						<CharacterCard
							id={character.id}
							key={character.id}
							name={character.name}
							image={character.image}
							cardPicked={this.cardPicked}
							picked={character.picked}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;