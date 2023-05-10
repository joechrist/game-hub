import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
 * Custom hook to Fetch game data
 * @returns an object with 'games' , 'eror' properties
 */
const useGames = () => {
  //
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  // Handle the cancelation To cancel a request
  const controller = new AbortController();

  //
  useEffect(() => {
    apiClient
      .get<IFetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // Clean up function
    return () => controller.abort();
  }, []);

  //
  return { games, error };
};

export default useGames;
