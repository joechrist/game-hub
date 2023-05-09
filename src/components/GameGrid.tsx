import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

// Interface or shape of the 'results' array property of the api response
interface IGame {
  id: number;
  name: string;
}

// Interfaces Toi represent the api response
interface IFetchGamesResponse {
  count: number;
  results: IGame[];
}

/**
 * Main GameGrid Component
 * @returns
 */
const GameGrid = () => {
  //
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  //
  useEffect(() => {
    apiClient
      .get<IFetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  //
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
