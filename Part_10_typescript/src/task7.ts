//7. Implement an async/await function that fetches data from an API and demonstrates error handling and handling of async operations.

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

const apiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode";
fetchData<IJokeRes>(apiUrl)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error occurred while fetching data:", error);
  });

interface IJokeRes {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: {
    nsfw: boolean;
    religious: boolean;
    racist: boolean;
    rexist: boolean;
    explicit: boolean;
  };
  safe: boolean;
  id: number;
  lang: string;
}
