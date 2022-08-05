import useFetchCharacters from '../hooks/useFetchCharacters'

export const Card = () => {

    const {characters, isLoading} = useFetchCharacters();
    console.log(isLoading);
    console.log(characters);

};
