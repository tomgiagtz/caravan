import { fetchedVoters } from "../actions/actions";
import { FETCHED_CAMPAIGN } from "../actions/types";

const campaignReducer = (campaign = {}, action) => {
	switch (action.type) {
		case FETCHED_CAMPAIGN:
			console.log(action.campaign)
			return action.campaign
		default:
			return campaign;
	}
}

export default campaignReducer