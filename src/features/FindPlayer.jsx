import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText.trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Players"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

const FindPlayer = () => {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    // Fetch initial list of players from the API
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf/players');
      if (response.ok) {
        const data = await response.json();
        setPlayers(data);
        setFilteredPlayers(data);
      } else {
        console.error('Failed to fetch players');
      }
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handleSearch = (searchText) => {
    // Ensure players is an array before applying filter
    if (Array.isArray(players)) {
      const filtered = players.filter((player) =>
        player.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPlayers(filtered);
    }
  };

  return (
    <div>
      <h2>Find Player</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {Array.isArray(filteredPlayers) && filteredPlayers.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FindPlayer;