import React, { useState, useEffect } from 'react';
import Row from './Row';
import './App.css';
import playlistData from './assets/playlist.js';

const songsPerPage = 3;
let arrayForSongs = [];
// TODO add spinner
function App() {
  const [songsToShow, setSongsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedSongs = playlistData.slice(start, end);
    arrayForSongs = [...arrayForSongs, ...slicedSongs];
    setSongsToShow(arrayForSongs);
  };

  useEffect(() => {
    loopWithSlice(0, songsPerPage)
  }, []);

const handleShowMoreSongs = () => {
  loopWithSlice(next, next + songsPerPage);
  setNext(next + songsPerPage)
};
  return (
    <div className="App">
      <div className = "App-container">
        <header className="App-header">
          <h1>
            tushig is listening
          </h1>
        </header>
        <Row songsToRender = {songsToShow} />
        <button onClick={handleShowMoreSongs}>Load more</button>
        <div className = "shameless-plugging">
          <p className="p-footer">
              <small>
                <a href="https://www.instagram.com/binariesinspace/" target="blank"
                  >Instagram
                </a>
              </small>|
              <small>
                <a href="https://github.com/luffy1727/tushig-listens" target="blank"
                  >GitHub
                </a>
              </small>
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
