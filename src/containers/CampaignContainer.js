import React, { Component } from "react";
import CampaignInput from "../components/CampaignInput";
import CampaignDetails from "../components/CampaignDetails";
import getUser from "../helpers/getUser";

export default class CampaignContainer extends Component {
	render() {
		let user = getUser()
		return (
			<>
				{user && user.info.campaign ? <CampaignDetails /> : null}
				<CampaignInput header="Change Caravans Here" />
			</>
		);
	}
}
