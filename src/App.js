import React, {Component} from 'react';
import PhotoContainer from "./PhotoContainer";

class App extends Component {
	constructor() {
		super();
		this.state = {
			photos: [], refreshPhoto:false
		};
    	this.showPhoto = this.showPhoto.bind(this);
	}

	showPhoto() {
    this.setState({refreshPhoto : !this.state.refreshPhoto})
		fetch("https://api.thedogapi.com/v1/images/search?limit=1")
			.then(response => {
				//console.log('response', response);
				if (!response.ok) {
					throw Error("error fetching the cute dog");
				}
				return response.json()
					.then(allData => {
						this.setState( {photos:allData});

					})
					.catch(err => {
						throw Error(err.message);
					});
				});
	}

	render() {
		return (
				<div className="container">

					<button onClick={() => this.showPhoto()}> See a dog picture </button>
						{this.state.refreshPhoto  ?
 						<PhotoContainer photos={this.state.photos} /> : this.setState({refreshPhoto:true })
						}
				</div>
		)
	}

}


export default App;
