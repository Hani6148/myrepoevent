import React, { Component } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

class Books extends Component {
	state = {
		services: [],
		offerer: '',
		email: '',
		descritpion: '',
		serviceType: ''
	};

	componentDidMount() {
		this.loadServices();
	}

	loadServices = () => {
		API.getServices()
			.then((res) =>{
				console.log(res.data)
				 this.setState({ services: res.data, offerer: '', email: '', descritpion: '' })
			})
			.catch((err) => console.log(err));
	};

	deleteServices = (id) => {
		API.deleteServices(id).then((res) => this.loadServices()).catch((err) => console.log(err));
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		console.log("STATE:", this.state)
		API.saveServices({
			offerer: this.state.offerer,
			email: this.state.email,
			description: this.state.description,
			serviceType: this.state.serviceType
		})
			.then((res) => {
				this.loadServices();
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-4">
						<Jumbotron>
							<h1>Let Us Help You Connect</h1>
							<br></br>
							<h5>
								Are you in need of that special addition to your party or event?
								<br></br>
							 	Do you offer event services
								to make someone's day extra special?
								<br></br>
								Please complete form below to connect with EventBook users.{' '}
							</h5>
						</Jumbotron>
						<form>
							<Input
								value={this.state.offerer}
								onChange={this.handleInputChange}
								name="offerer"
								placeholder="Name (required)"
							/>
							<Input
								value={this.state.email}
								onChange={this.handleInputChange}
								name="email"
								placeholder="Email (required)"
							/>
							<label>
								<input type="radio" name="serviceType" value="option1" onChange={this.handleInputChange} />
								Professional Party/Event Specialists
							</label>
							<label>
								<input type="radio" name="serviceType" value="option2" onChange={this.handleInputChange} />
								Seeking Event / Party Services
							</label>

							<TextArea
								value={this.state.description}
								onChange={this.handleInputChange}
								name="description"
								placeholder="Tell Us About Your Event or Talents (Required)"
							/>
							<FormBtn
								disabled={!(this.state.offerer && this.state.email)}
								onClick={this.handleFormSubmit}
							>
								Submit
							</FormBtn>
						</form>
					</Col>
					<Col size="md-4 sm-6">
						<Jumbotron>
							<h1>Event Specialists</h1>
							<br></br>
							<h5>
							Party Planners
							<br></br>
							Photographers
							<br></br>
							Catering
							<br></br>
							Magic/Balloons
							<br></br>
							Musicians/DJs
							</h5>
						</Jumbotron>

						<List>
							{this.state.services
								.filter((service) => service.serviceType === "option1")
								.map((service) => (
									<ListItem key={service._id}>
										<Link to={'/books/' + service._id}>
											<strong>
												{service.offerer}
												<br />
												{service.email}
												<br />
												{service.description}
											</strong>
										</Link>
										<DeleteBtn onClick={() => this.deleteServices(service._id)} />
									</ListItem>
								))}
						</List>
					</Col>
					<Col size="md-4 sm-6">
						<Jumbotron>
							<h1>In Search of Services</h1>
						</Jumbotron>
						{this.state.services.length ? (
							<List>
								{this.state.services
									.filter((service) => service.serviceType === "option2")
									.map((service) => (
										<ListItem key={service._id}>
											<Link to={'/books/' + service._id}>
												<strong>
													{service.name}
													<br />
													{service.email}
													<br />
													{service.description}
												</strong>
											</Link>
											<DeleteBtn onClick={() => this.deleteServices(service._id)} />
										</ListItem>
									))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Books;
