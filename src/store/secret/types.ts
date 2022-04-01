import { Dispatch } from "redux";
import { appReducer } from "../reducer";

export interface Secret {
  hash: string;
  secretText: string;
  expireAt: Date;
  createdAt: string;
}

export interface Slice {
  secrets: Array<Secret>;
  isFetching: boolean;
  isError: boolean;
}

export type Thunk = (
  dispatch: Dispatch<any>,
  getState: () => RootState
) => Promise<any>;

export type RootState = ReturnType<typeof appReducer>;
