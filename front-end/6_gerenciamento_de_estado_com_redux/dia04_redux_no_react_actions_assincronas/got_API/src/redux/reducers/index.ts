import { REQUEST_API_GOT_START, REQUEST_API_GOT_CONFIRM, REQUEST_API_GOT_ERROR } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  name: '',
  gender: '',
  culture: '',
  born: '',
  titles: '',
  playedBy: '',
}

type ActionType = {
  payload: string,
  type: string,
  error: string,
}

function gotReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case REQUEST_API_GOT_START:
      return {
        ...state,
        isFetching: true,
        name: '',
        gender: '',
        culture: '',
        born: '',
        titles: '',
        playedBy: '',
      };
    case REQUEST_API_GOT_CONFIRM:
      return {
        ...state,
        isFetching: false,
        name: action.payload,
        gender: action.payload,
        culture: action.payload,
        born: action.payload,
        titles: action.payload,
        playedBy: action.payload,
      };
    case REQUEST_API_GOT_ERROR:
      return {
        ...state,
        isFetching: false,
        name: action.payload,
        gender: action.payload,
        culture: action.payload,
        born: action.payload,
        titles: action.payload,
        playedBy: action.payload,
        error: action.error,
      };
    default:
      return state
  }
}

export default gotReducer;