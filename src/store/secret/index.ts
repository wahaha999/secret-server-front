import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSecrets } from "../../app/service/secret.service";
import { Secret, Slice } from "./types";
import { Thunk } from "./types";

export const initialState: Slice = {
  secrets: [],
  isFetching: false,
  isError: false,
};

const slice = createSlice({
  name: "secret",
  initialState,
  reducers: {
    request(state: any) {
      state.isFetching = true;
    },
    success(state: any, action: PayloadAction<Secret[]>) {
      state.isFetching = false;
      state.isError = false;
      state.secrets = action.payload;
    },
    failure(state: any) {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { reducer } = slice;

export const { request, success, failure } = slice.actions;

export const getAllSecrets = (): Thunk => {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(request());
    try {
      const { data } = await getSecrets();
      dispatch(success(data));
    } catch (e) {
      dispatch(failure());
    }
  };
};
