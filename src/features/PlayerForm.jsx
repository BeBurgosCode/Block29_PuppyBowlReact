import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from './playerSlice';


function PlayerForm() {
  const dispatch = useDispatch();
  const [playerName, setPlayerName] = useState('');

  const handleAddPlayer = async () => {
    try {
      if (!playerName.trim()) return; // Check if playerName is empty or only whitespace

      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: playerName }),
      });

      if (response.ok) {
        const newPlayer = await response.json();
        dispatch(addPlayer(newPlayer));
        setPlayerName('');
      } else {
        const errorData = await response.json();
        console.error(`Failed to create player: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Player</h2>
      <input
        type="text"
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
  );
}

export default PlayerForm;



