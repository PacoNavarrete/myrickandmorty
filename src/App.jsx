
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { Cards, Search } from './components';
import PageNavigation from './components/PageNavigation';
import useFetchCharacters from './hooks/useFetchCharacters'

const App = () => {

  const [character, setCharacter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { results, pageCount } = useFetchCharacters(currentPage, character);
  const [ page, setPage ] = useState( 1 );

  const onAddCharacter = ( newCharacter ) => {
    setCharacter( newCharacter )
  }

  return (
    <>
      <header className='header-app'>
        <div className='title-container'>
          <h1 className='app-title'>Rick <small>and</small> Morty</h1>
        </div>
        <Search
        onNewCharacter={(value) => onAddCharacter(value)}
        resetCurrentPage={setCurrentPage}
        resetPage={setPage}
      />
      </header>
      <PageNavigation
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
        page={page}
        setPage={setPage}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid 
          container spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 2, sm: 4, md: 12 }}
          justifyContent={'center'}
          alignItems={'center'}
          >
          <Cards results={results} />
        </Grid>
      </Box>
      <PageNavigation
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
        page={page}
        setPage={setPage}
      />
      <footer>
        <div className='footer-developer'>
          developed by 
            <span className='developer-name'>
              Francisco Navarrete 2022
            </span>
        </div>
      </footer>
    </>
  );
};

export default App;
