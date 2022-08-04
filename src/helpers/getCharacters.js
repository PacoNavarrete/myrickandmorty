const getCharacters = async () => {
  const api = `https://rickandmortyapi.com/api/character/?page=1`;
  const resp = await fetch(api);
  const data = await resp.json();

  return console.log(data); //cambiar console log por data
};

export default getCharacters;
