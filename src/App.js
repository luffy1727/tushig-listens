import React, { useState, useEffect } from 'react';
import Row from './Row';
import './App.css';
import playlistData from './assets/playlist.js';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from "react-loader-spinner";

const songsPerPage = 3;
let arrayForSongs = [];
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
  if (songsToShow && songsToShow.length >= playlistData.length) {
    // Do not load if there's no more items
    return;
  }  
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
        <InfiniteScroll
          loadMore={handleShowMoreSongs}
          hasMore= {songsToShow && songsToShow.length < playlistData.length}
          loader={
            <Loader
            type="Puff"
            color="#FFFFFF"
            height={100}
            width={100}
          />
          }
        >
          <Row songsToRender = {songsToShow} />
        </InfiniteScroll>
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
