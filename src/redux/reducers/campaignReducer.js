import { FETCHED_CAMPAIGN, UPDATE_CAMPAIGN, CLEAR_STATE } from "../actions/types";

const campaignReducer = (campaign = {}, action) => {
    switch (action.type) {
        case UPDATE_CAMPAIGN:
            return campaign;
        case FETCHED_CAMPAIGN:
            return action.campaign;
        case CLEAR_STATE:
            return {}
        default:
            return campaign;
    }
};

export default campaignReducer;
