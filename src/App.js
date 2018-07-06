import React, { Component } from 'react';
import './App.css';
import Trello from './lib/trello';
import Geocode from './lib/geocode';
import Map from './Map';

class App extends Component {
  state = {
	  cards: []
  }

  getAddressFromTitle(cardTitle) {
	  return cardTitle.split('|')[0]
  }

  componentDidMount() {
	let t = new Trello()
	let url = t.getAptCards()
	console.log(url)
	fetch(url)
	  .then(res => res.json())
	  .then(cards => {
		  cards.forEach(card => {
			  let address = this.getAddressFromTitle(card["name"])
			  let g = new Geocode()
			  let g_url = g.generateUrl(address)
			  fetch(g_url)
				.then(res => res.json())
				.then(json => {
					if(json["status"] === "OK") {
					  if(json["results"][0]["geometry"]) {
						let coord = json["results"][0]["geometry"]["location"];
						let newState = [...this.state.cards, {coord, card}]
						this.setState({
							cards: newState
						})
					  }
					} else {
						console.log(json)
					}
				})
		  })
	  })
  }

  render() {
    return (
      <div className="App">
	<Map markers={this.state.cards}/>
      </div>
    );
  }
}

export default App;
