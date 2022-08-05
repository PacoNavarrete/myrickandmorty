import { useEffect, useState } from 'react';
import getCharacters from '../helpers/getCharacters';
const { data, api  } = await getCharacters(); // !poner atencion al comportamiento de esta implementacion!

const useFetchCharacters = () => {
  const [ characters, setCharacters ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );

  const getNewCharacters = async () => {
    const newCharacters = await data; // !poner atencion al comportamiento de esta implemetacion!
    setCharacters(newCharacters);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewCharacters();
  }, [api]);

  return {
    characters,
    isLoading
  };

};

export default useFetchCharacters;
