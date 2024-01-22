import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi", baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf"
    }),

    // Define endpoints for our API service
    endpoints: (builder) => ({
      // Define an endpoint that fetches players
      getPlayers: builder.query({
        query: ()=> '/players'}),

        createPlayer: builder.mutation({
            query: (newPlayer) => ({
              url: "/players",
              method: "POST",
              body: newPlayer,
            }),
          }),
    
        // The part of the URL that comes after the baseUrl for this specific endpoint
       
        getPlayer: builder.query({
          query:(id)=> `/player/${id}`
      })
     
    }),
  });
  
  // Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
  
  export const {useGetPlayersQuery, useGetPlayerQuery, useCreatePlayerMutation } = puppyBowlApi;