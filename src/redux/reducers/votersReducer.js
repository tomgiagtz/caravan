import { FETCH_VOTERS, FETCHING_VOTERS, FETCHED_VOTERS } from '../actions/types'

const votersReducer = (voters = [], action) => {
	switch (action.type) {
		case FETCHED_VOTERS:
			return action.voters
		default:
			return voters

	}
}
export default votersReducer

