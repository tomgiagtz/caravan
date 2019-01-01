import { authHeader } from "../../helpers/authHeader";

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
		`level_of_support: ${level_of_support} )` +
		//response data
		" { voter_record { name } } }"
	postQuery(queryString, callback);
};

export const loginUser = (data, callback) => {
	let {email, password} = data
	let queryString = 'mutation { signInUser( email: {' +
		`email: "${email}", `+
		`password: "${password}"})` + 
		//response data
		'{user { id name campaign {id name}} token } }'
	postQuery(queryString, callback)
};

export const createUser = (data, callback) => {
	let {name, email, password} = data
	let queryString = 'mutation { createUser(' + 
		`name: "${name}", ` +
		'authProvider: {email: {' +
		`email: "${email}", `+
		`password: "${password}"}})` + 
		//response data
		'{id name email} }'
	postQuery(queryString, callback)
};


export const logoutUser = () => {
	localStorage.removeItem('user');
}
// mutation {
// 	createUser(name: "Example", authProvider: {email: {email: "example@example.com", password: "password"}}) {
// 	  id
// 	  name
// 	  email
// 	}
//   }

//  {
//    campaign(id: "5ebcfa50-e4c4-4709-b874-c0314a16e52b") {
//  script
//  id
//  users {
//    name
//    campaign {
//  name
//    }
//  }
//    }
//  }


//  mutation {
//    updateUserCampaign(user_id: "65c5b0c4-5c99-4510-9e2b-cc87ee274fc9", campaign_id: "5ebcfa50-e4c4-4709-b874-c0314a16e52b") {
//  name
//    }
//  }
