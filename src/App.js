import React, {Component} from 'react';
import PhotoContainer from "./PhotoContainer";

class App extends Component {
	constructor() {
		super();
		this.state = {
			photos: [], 
			refreshPhoto:false,
			message: ''
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
						this.setState( {photos:allData, message:'hi'});
					})
					.catch(err => {
						throw Error(err.message);
					});
				});
	
	}

	sayHello() {
	}

	render() {
		return (
				<div className="container">
		
				
					<button onClick={() => this.showPhoto()}> Get your daily dog photo </button>
						<div className="container2">

			<div className="image">
						{this.state.refreshPhoto  ?
 						<PhotoContainer photos={this.state.photos} /> : this.setState({refreshPhoto:true})
						} 
			<div class="text"> {this.state.message} </div>
			</div>
			</div>
				</div>
		)
	}

}


export default App;
