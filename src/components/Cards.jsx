
export const Cards = ({ results }) => {

  let displayCharacters;

  if (results) {
    displayCharacters = results.map((results) => {
      let { id, image, name, status, location, gender, species } = results;
      return (
        <div
          key={id}
          className='card-ui'>
            <img className='img' src={image} alt={name} />
            <div className='content'>
              <div className='content-name'>{name}</div>
              <div className='content-specie'>Specie: {species}</div>
              <div className='content-gender'>Gender: {gender}</div>
              <div className='last-location'>Last Location: {location.name}</div>

            </div>
          {(() => {
            const obj = {
              "Dead": <div className='status dead'>{status}</div>,
              "Alive": <div className='status alive'>{status}</div>,
            }
            return obj[status] ?? <div className='status unknown'>{status}</div>
          })()}
        </div>      
      );
    });
  } else {
    return (
      <div className='error-container'>
        <p className='error-message'>oops!</p>
        <p className='error-message'>Name not found!</p>
        <p className='error-message'>Clear the box & try a new seach</p>
      </div>
    )
  }
  return <> {displayCharacters} </>

};
