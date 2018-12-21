import {
	FETCH_VOTERS,
	FETCHING_VOTERS,
	FETCHED_VOTERS,
	SELECT_VOTER,
	POST_SURVEY,
	POSTED_SURVEY,
	FETCHED_CAMPAIGN
} from './types'

import { queryVoters, queryCampaign, postSurveyQuery } from './api'

export function fetchVoters() {
	return (dispatch) => {
		dispatch(fetchingVoters)
		queryVoters((voters) => dispatch(fetchedVoters(voters.data.allVoterRecords)))
	}
}
export function fetchingVoters() {
	return { type: 'FETCHING_VOTERS' }
}
export function fetchedVoters(voters) {
	return { type: 'FETCHED_VOTERS', voters }
}
export function selectVoters() {
	return { type: 'SELECT_VOTER' }
}
export function postSurvey(data) {
	return (dispatch) => {
		postSurveyQuery(data, (name) => dispatch(postedSurvey()))
	}
}

export function postedSurvey() {
	return { type: POSTED_SURVEY }
}

export function fetchCampaign(id) {
	return (dispatch) => {
		queryCampaign(id, ({ data: { campaign } }) => {
			dispatch(fetchedCampaign(campaign))
			dispatch(fetchedVoters(campaign.voter_records))
		})
	}
}

export function fetchedCampaign(campaign) {
	console.log(campaign)
	return { type: FETCHED_CAMPAIGN, campaign }
}