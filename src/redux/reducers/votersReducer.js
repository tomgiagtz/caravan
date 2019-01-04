import {
	FETCHED_VOTERS,
	VOTER_CONTACTED,
	CLEAR_STATE,
	VOTER_NO_ANSWER
} from "../actions/types";

const votersReducer = (voters = { contacted: [], toContact: [] }, action) => {
	let newToContact;
	let newContacted;
	switch (action.type) {
		case FETCHED_VOTERS:
			let contacted = action.voters.filter(v => v.contacted);
			let toContact = action.voters.filter(v => !v.contacted);
			return { contacted, toContact };
		case VOTER_CONTACTED:
			newToContact = [...voters.toContact];
			newContacted = [...voters.contacted];
			// TODO: update voter fetch call
			newContacted.unshift(newToContact.splice(0, 1)[0]);
			newContacted[0].contacted = true;
			return { contacted: newContacted, toContact: newToContact };
		case VOTER_NO_ANSWER:
			newContacted = [...voters.contacted]
			newToContact = voters.toContact.filter(v => v.id !== action.voterId)

			return { contacted: newContacted, toContact: newToContact };
		case CLEAR_STATE:
			return { contacted: [], toContact: [] }
		default:
			return voters;
	}
};
export default votersReducer;
