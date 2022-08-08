import useFetchCharacters from '../hooks/useFetchCharacters'

export const Card = () => {

    const { info, results} = useFetchCharacters();

    let displayCharacters;
    if ( results ) {

        displayCharacters = results.map((results) => {
            let { id, image, name, status, location } = results;
          
                return (
                    <div
                    key={id}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                        <div className={`card d-flex flex-column justify-content-center`}>
                        <img className={`img img-fluid`} src={image} alt={name} />
                        <div className={`content`}>
                            <div className="fs-5 fw-bold mb-4">{name}</div>
                            <div className="">
                            <div className="fs-6 fw-normal">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                        </div>
                        {(() => {
                    if (status === "Dead") {
                      return (
                        <div
                          className={`badge position-absolute badge bg-danger`}
                        >
                          {status}
                        </div>
                      );
                    } else if (status === "Alive") {
                      return (
                        <div
                          className={`badge position-absolute badge bg-success`}
                        >
                          {status}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className={`badge position-absolute badge bg-secondary`}
                        >
                          {status}
                        </div>
                      );
                    }
                  })()}
                    </div>
                );
        });

    } else {
        displayCharacters = 'No characters found!'
    }

    return <> { displayCharacters } </>

};
