import { useState } from "react";

export const Search = ( { onNewCharacter, resetCurrentPage, resetPage } ) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ( { target } ) => {

    resetCurrentPage(1);
    resetPage(1);

    setInputValue( target.value.toLowerCase() );

    onNewCharacter( target.value.toLowerCase() );
  };

  return (
    <div className='form-box'>
      <form className="form" onSubmit={ ( event ) => { event.preventDefault() } }>
        <input
          className="input" 
          type="text"
          placeholder="Search: type here..."
          value={inputValue}
          onChange={onInputChange}
          onClick={(event)=>{event.target.select()}}
          />
      </form>
    </div>
  )
};
