import {Typography, Pagination, Stack, Box} from '@mui/material';
import { useState } from 'react';


const PageNavigation = ( { pageCount, setCurrentPage, page, setPage } ) => {
  
  const handleChange = ( event, value ) => {
    setPage( value );
    setCurrentPage( value )
  };
  return (
    <Box 
    sx={{height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Stack spacing={ 2 }>
        <Pagination 
          count={ pageCount } 
          page={ page } 
          onChange={ handleChange } 
          size='large'
          color='secondary'
          className='pagination'
          sx={{background: 'rgba(255, 255, 255, 0.8)', borderRadius: '20px'}}
         />
      </Stack>
    </Box>
  );
}

export default PageNavigation;