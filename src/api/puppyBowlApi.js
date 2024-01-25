import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi", baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf"
    }),

    endpoints: (builder) => ({
      getPlayers: builder.query({ query: () => `/players` }),
      getPlayer: builder.query({ query: (id) => `/players/` + id }),
      createPlayer: builder.mutation({
        query: (newPlayer) => ({
          url: `/players`,
          method: "POST",
          body: newPlayer,
        }),
      }),
      deletePlayer: builder.mutation({
        query: (id) => ({
          url: `/players/` + id,
          method: "DELETE",
        }),
      }),
    }),
  });
  
  export const {
    useGetPlayersQuery,
    useGetPlayerQuery,
    useCreatePlayerMutation,
    useDeletePlayerMutation,
  } = puppyBowlApi;
  
  // Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query