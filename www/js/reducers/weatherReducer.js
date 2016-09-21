
//reducer - changing state of store to rerender proper components
export default function(state =  {
	weather: {},
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch (action.type) {
		case "FETCH_WEATHER": {
			return ({...state, fetching: true});
		}
		case "FETCH_WEATHER_REJECTED": {
			return ({...state, fetching: false, error: action.payload, weather: 0});
		}
		case "FETCH_WEATHER_FULFILLED": {
			return ({...state, fetching: false, fetched: true, weather: action.payload.data.query.results});
		}
	}
	return state;
}