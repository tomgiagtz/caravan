import { authHeader } from '../../helpers/authHeader'

const URL = "http://localhost:3001/graphql";


function postQuery(queryString, callback) {
	fetch(URL, {
		method: "POST",
		headers: authHeader(),
		body: JSON.stringify({ query: queryString })
	})
		.then(resp => resp.json())
		.then(callback);
}

export const queryCampaign = (id, callback) => {
	let queryString =
		' { campaign (id: "' +
		id +
		'") { ' +
		"name " +
		"script " +
		"candidate_name " +
		"candidate_party " +
		"voter_records { " +
		"id " +
		"name " +
		"contacted " +
		"phone_number " +
		"party_affiliation " +
		"survey_results { " +
		"notes " +
		"} " +
		"} " +
		"} }";
	postQuery(queryString, callback);
};

export const queryVoters = callback => {
	let queryString =
		" { allVoterRecords { " +
		"id " +
		"name " +
		"contacted " +
		"phone_number " +
		"party_affiliation " +
		"survey_results { " +
		"notes " +
		"} " +
		"} }";
	postQuery(queryString, callback);
};

export const postSurveyQuery = (data, callback) => {
	let {
		voter_record_id,
		notes,
		answered,
		knows_candidate,
		supports_candidate,
		level_of_support
	} = data;
	let queryString =
		"mutation { createSurveyResult ( " +
		`voter_record_id: "${voter_record_id}", ` +
		`notes: "${notes}", ` +
		`answered: ${answered}, ` +
		`knows_candidate: ${knows_candidate}, ` +
		`supports_candidate: ${supports_candidate}, ` +
		`level_of_support: ${level_of_support}` +
		") {" +
		"voter_record {" +
		"name" +
		"} " +
		"} }";
	postQuery(queryString, callback);
};

export const loginUser = (data) => {

}

export const createUser = (data) => {

}
