 import {createSlice} from "@reduxjs/toolkit";
 import { puppyBowlApi } from "../api/puppyBowlApi";


 export const playerSlice = createSlice({
    name: 'players',
    initialState: {
      list: [],
    },
    reducers: {
      addPlayer: (state, action) => {
        state.list = [...state.list, action.payload];
      },
    },
    extraReducers: (builder) => { 
      builder.addMatcher(
        puppyBowlApi.endpoints.getPlayers.matchFulfilled,
        (state, { payload }) => {
          return { ...state, list: payload.data.players };
        }
      );
      builder.addMatcher(
        puppyBowlApi.endpoints.createPlayer.matchFulfilled,
        (state, { payload }) => {
          state.list = [...state.list, payload];
        }
      );
    },
  });
  

export const { addPlayer } = playerSlice.actions;

export default playerSlice.reducer;
