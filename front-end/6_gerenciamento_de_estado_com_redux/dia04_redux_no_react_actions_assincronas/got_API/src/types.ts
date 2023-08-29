import { ThunkDispatch,  } from "redux-thunk";
import { AnyAction } from "redux";

export type ReduxState = {
  isFetching: boolean;
  name: string;
  gender: string;
  culture: string;
  born: string;
  titles: string;
  playedBy: string;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>