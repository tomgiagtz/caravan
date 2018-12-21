import votersReducer from './votersReducer'
import campaignReducer from './campaignReducer';

import { combineReducers} from 'redux';

const rootReducer = combineReducers({
	voters: votersReducer,
	campaign: campaignReducer
})

export default rootReducer