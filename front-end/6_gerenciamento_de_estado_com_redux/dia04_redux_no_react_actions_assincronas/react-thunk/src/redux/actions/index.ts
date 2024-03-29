import { Dispatch } from "../../types";

export const REQUEST_STARTED = 'REQUEST_STARTED'
export const REQUEST_SUCESSFUL = 'REQUEST_SUCESSFUL'
export const REQUEST_FAILED = 'REQUEST_FAILED'

function requestStarted() {
  return {
    type: REQUEST_STARTED
  };
}

function requestSucessfull(imageURL: string) {
  return {
    type: REQUEST_SUCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchDogImage() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted())
      const response  = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(requestSucessfull(data.message));
    } catch (error: any) {
      dispatch(requestFailed(error.message))
    }
  }
}