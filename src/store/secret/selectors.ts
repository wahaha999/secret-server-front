import { RootState } from "./types";

export const getIsFetching = (state: RootState) => state.secrets.isFetching;
export const getIsError = (state: RootState) => state.secrets.isError;
export const getSecrets = (state: RootState) => state.secrets.secrets;
