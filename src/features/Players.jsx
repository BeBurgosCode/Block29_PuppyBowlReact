import React from "react";
import { useSelector } from "react-redux";
import { useGetPlayersQuery } from "../api/puppyBowlApi";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";

const Players = () => {
  const players = useSelector((state) => state.players);
  const navigate = useNavigate();

  const { data = {}, error, isLoading } = useGetPlayersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>Error: {error.message}</div>;
  }
// This helps navigate to player details page
  const handleDetailsClick = (playerId) => {navigate(`/player/${playerId}`);
};
  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data?.data?.players?.map((player) => (
       
       <div key={player.id} className="player-card">
       <Link to={`/player/${player.id}`} className="player-link"
        >
          <div className="player-image-container">
            <img
              className="player-image"
              src={player.imageUrl}
              alt={player.name}
            />
          </div>

          {/* Display the player's image, with the player's name as alt text */}

          <div className="player-details">
            <h2> {player.name} </h2>
            <p>{player.id}</p>

            <p> {player.breed} </p>

            <p> {player.status} </p>
          </div>
        </Link>
        {/* button creates a click button */}
<button onClick={()=> handleDetailsClick(player.id)}>
Details
</button>

        </div>
      ))}
    </div>
  );
};

export default Players;
