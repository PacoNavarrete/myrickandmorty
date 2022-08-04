import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useContext, useEffect } from 'react';
import { Card, Filter, Pagination, Search, Navbar } from './components';
import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters';

const App = () => {
  // const { info, results } = useFetchCharacters();
  useFetchCharacters();

  // console.log(info);
  // const api = `https://rickandmortyapi.com/api/character/?page=4`;

  // const [fetchedData, setFetchedData] = useState([]);
  // const { info, results } = fetchedData;
  // console.log(results);

  // useEffect(() => {
  //   (async function () {
  //     const data = await fetch(api).then((resp) => resp.json());
  //     setFetchedData(data);
  //     // console.log(data);
  //   })();
  // }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">Card component will be placed here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
