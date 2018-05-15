import {FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE} from './constants'

export function fetchPeopleFromAPI() {
    return (dispatch) => {
        dispatch(getPeople())
        fetch('https://swapi.co/api/people/1/')
        .then(response => response.json())
        .then(json => dispatch(getPeopleSuccess(json.results)))
        .catch(error => dispatch(getPeopleFailure(error)))
    }
}

function getPeople() {
    return {
        type: FETCHING_PEOPLE
    }
}

function getPeopleSuccess() {
    return {
        type: FETCHING_PEOPLE_SUCCESS
    }
}

function getPeopleFailure() {
    return {
        type: FETCHING_PEOPLE_FAILURE
    }
}
