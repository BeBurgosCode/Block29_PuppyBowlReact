 import {createSlice} from "@reduxjs/toolkit";
 import { puppyBowlApi } from "../api/puppyBowlApi";
import * as search from "../api/search"


  const playerSlice = createSlice({
    name: 'players',
    initialState: {
      players: [],
      searchQuery: "",
    },
    
      reducers: {
        setSearchQuery: (state, action) => {
          state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => { 
      builder.addMatcher(
        puppyBowlApi.endpoints.getPlayers.matchFulfilled,
        (state, { payload }) => {
            state.players = payload.results;
         }
        
    //   );
    //   builder.addMatcher(
    //     puppyBowlApi.endpoints.createPlayer.matchFulfilled,
    //     (state, { payload }) => {
    //       state.list = [...state.list, payload];
    //     }
      );
    },
});
  

export const {setSearchQuery} = playerSlice.actions;
export const selectSearchQuery = (state) => state.puppyBowl.searchQuery;
export { search };
export default playerSlice.reducer;
