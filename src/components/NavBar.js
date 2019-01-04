import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { logoutUser } from "../redux/actions/api";
import { clearState } from "../redux/actions/actions"
import { connect } from "react-redux";

const color = "violet";
class NavBar extends Component {
	state = { activeItem: "home" };

	correctPath = () => {
		return this.state.activeItem === this.getRouteName();
	};
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	getRouteName = () => {
		return this.props.location.pathname.split("/")[1];
	};

	logInOut = () => {
		let user = JSON.parse(localStorage.getItem("user"));
		let clickFunc;
		let text = "";
		if (user && user.authdata) {
			clickFunc = () => {
				this.props.clearState()
				logoutUser()
			};
			text = "Logout";
		} else {
			text = "Login";
			clickFunc = this.handleItemClick;
		}
		return (
			<Menu.Item
				as={Link}
				to="/login"
				active={this.state.activeItem === "login"}
				position="right"
				onClick={clickFunc}
				color={color}
				name="login"
			>
				{text}
			</Menu.Item>
		);
	};

	render() {
		const { activeItem } = this.state;
		//handles redirects
		if (!this.correctPath()) {
			this.handleItemClick(null, { name: this.getRouteName() });
		}
		return (
			<Menu inverted>
				<Menu.Item as={Link} to="/home" color={color} active>
					<Icon size="large" name="bus" />
					Caravan
				</Menu.Item>
				<Menu.Item
					as={Link}
					to="/home"
					active={activeItem === "home"}
					onClick={this.handleItemClick}
					color={color}
					name="home"
				>
					Home
				</Menu.Item>
				<Menu.Item
					as={Link}
					to="/phone"
					active={activeItem === "phone"}
					onClick={this.handleItemClick}
					color={color}
					name="phone"
				>
					Phone Bank
				</Menu.Item>
				{/* <Menu.Item
					as={Link}
					to="/home"
					active={activeItem === "canvas"}
					onClick={this.handleItemClick}
					color={color}
					name="canvas"
				>
					Canvas
				</Menu.Item> */}

				<Menu.Menu position="right">
					<Menu.Item
						as={Link}
						to="/campaign"
						active={activeItem === "campaign"}
						onClick={this.handleItemClick}
						color={color}
						position="right"
						name="campaign"
					>
						Campaign
					</Menu.Item>
					{this.logInOut()}
				</Menu.Menu>
			</Menu>
		);
	}
}

export default connect(
	null,
	{ clearState }
)(withRouter(NavBar));
