
import React from "react";
import { useParams } from "react-router-dom";
import {useGetPlayerQuery} from "../api/puppyBowlApi"

//To handle the details of a specific player. You can use the useParams hook from react-router-dom 
// to retrieve the player's ID from the URL and fetch detailed information.

function Player () {
  const {id} = useParams();
  const { data, error, isLoading } = useGetPlayerQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.id}</p>
      <p>{data?.breed}</p>
      <p>{data?.status}</p> 

    </div>
  );
};

export default Player;

