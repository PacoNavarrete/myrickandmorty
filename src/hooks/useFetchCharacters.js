import { useEffect, useState } from 'react';
import getCharacters from '../helpers/getCharacters';

const useFetchCharacters = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewcharacters = async () => {
    const newCharacters = await getCharacters();
    setFetchedData(newCharacters);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewcharacters();
  }, []);
};

export default useFetchCharacters;
