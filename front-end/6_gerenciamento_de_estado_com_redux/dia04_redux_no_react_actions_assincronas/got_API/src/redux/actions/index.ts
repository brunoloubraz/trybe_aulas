import { Dispatch } from "react";
import fetchAPIGOT from "../../services/gotAPI";

export const REQUEST_API_GOT_START = 'REQUEST_API_GOT_START';
export const REQUEST_API_GOT_CONFIRM = 'REQUEST_API_GOT_CONFIRM';
export const REQUEST_API_GOT_ERROR = 'REQUEST_API_GOT_ERROR';

export const requestGOTAPI = () => ({
  type: REQUEST_API_GOT_START
});

export const requestGOTAPIConfirm = (  name: string,
  gender: string,
  culture: string,
  born: string,
  titles: string,
  playedBy: string) => ({
  type: REQUEST_API_GOT_CONFIRM,
  payload: {
    name,
    gender,
    culture,
    born,
    titles,
    playedBy
  }
});

export const requestGOTAPIDenied = () => ({
  type: REQUEST_API_GOT_ERROR
})

export const actionFetchGOTAPI = (character: string) => {
  return async (dispatch: Dispatch) => {
    try {
     dispatch(requestGOTAPI());
     const {personagem: {name, gender, culture, born, titles, playedBy}} = await fetchAPIGOT(character)
     dispatch(requestGOTAPIConfirm(name, gender, culture, born, titles, playedBy ))
    } catch (error) {
      dispatch(requestGOTAPIDenied)
    }
  }
}