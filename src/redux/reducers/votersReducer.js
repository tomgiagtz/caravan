import {
	FETCH_VOTERS,
	FETCHING_VOTERS,
	FETCHED_VOTERS,
	VOTER_CONTACTED
} from "../actions/types";

const votersReducer = (voters = { contacted: [], toContact: [] }, action) => {
	switch (action.type) {
		case FETCHED_VOTERS:
			let contacted = action.voters.filter(v => v.contacted);
			let toContact = action.voters.filter(v => !v.contacted);
			return { contacted, toContact };
		case VOTER_CONTACTED:
			let newToContact = [...voters.toContact];
			let newContacted = [...voters.contacted];
			let voterInd = voters.toContact.findIndexOf(
				v => v.id === action.voterId
			);
			// TO DO update voter fetch call
			newContacted.unshift(newToContact.splice(voterInd, 1));
			newContacted[0].contacted = true;
			return { contacted: newContacted, toContact: newToContact };

		default:
			return voters;
	}
};
export default votersReducer;
