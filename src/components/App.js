import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from '../api/youtube'
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [videoselected, setvideoselected] = useState(null);
  const [videos, onTermSubmit] = useVideos("liverpool");

  useEffect(() => {
    setvideoselected(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit}></SearchBar>
      <div className="ui grid">
        {/* <div className='ui row'> */}
        <div className="eleven wide column">
          <VideoDetail video={videoselected} />
        </div>
        <div className="five wide column">
          <VideoList
            onVideoSelect={setvideoselected}
            videos={videos}
          ></VideoList>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
