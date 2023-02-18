export async function getChuckNorrisFacts() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-RapidAPI-Key": "3082b70ff9msh9fdedfc44e0ed61p138045jsn74f50659ec1d",
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
    options
  );
  return response.json();
}
