import axios from "axios";

//action called from components, getting data from server and dispatching to reducer
export function fetchWeather(zipCode) {

	return function(dispatch) {
		//get weather data from server by weather service 
		axios.get("/weather/" + zipCode)
			.then((response) => {
				dispatch({type: "FETCH_WEATHER_FULFILLED", payload: response.data});
			})
			.catch((err) => {
				dispatch({type: "FETCH_WEATHER_REJECTED", payload: err});
			})
	}

}