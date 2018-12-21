import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

const color = 'violet'
class NavBar extends Component {
	state = {activeItem: 'home'}
	componentDidMount() {
		this.setState({activeItem: this.getRouteName()})
	}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	getRouteName = () => {return this.props.location.pathname.split('/')[1]}

	render() {
		// debugger
		const {activeItem} = this.state
		return (
			<Menu inverted>
				<Menu.Item as={Link} to='/home' color={color} active> <Icon size='large' name='bus'/>Caravan</Menu.Item>
				<Menu.Item as={Link} to='/home' active={activeItem === 'home'} onClick={this.handleItemClick} color={color} name='home'> Home</Menu.Item>
				<Menu.Item as={Link} to='/phone' active={activeItem === 'phone'} onClick={this.handleItemClick} color={color} name='phone'> Phone Bank</Menu.Item>
				<Menu.Item as={Link} to='/home' active={activeItem === 'canvas'} onClick={this.handleItemClick} color={color} name='canvas'> Canvas</Menu.Item>
			</Menu>
		)
	}
}

export default withRouter(NavBar)