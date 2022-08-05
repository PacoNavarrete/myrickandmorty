const getCharacters = async () => {
  const api = `https://rickandmortyapi.com/api/character/?page=3`;
  const resp = await fetch(api);
  const data = await resp.json();

  return {
    data,
    api
  }
};

export default getCharacters;
