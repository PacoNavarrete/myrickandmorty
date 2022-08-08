import { useEffect, useState } from 'react';
import getCharacters from '../helpers/getCharacters';
const { data, api  } = await getCharacters();

const useFetchCharacters = () => {
  const [ characters, setCharacters ] = useState( [ ] );

  const getNewCharacters = async () => {
    const newCharacters = await data;
    setCharacters(newCharacters);
  };

  useEffect(() => {
    getNewCharacters();
  }, [api]);

  return characters

};

export default useFetchCharacters;
