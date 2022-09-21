import React from "react";
import { useState, useCallback } from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  const [myVideos, setMyVideos] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "d532d97021msh068e487b5bca360p130386jsn4e4533c1c759",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  const fetchVideos = useCallback(async () => {
    try {
      const response = await fetch(
        "https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews",
        options
      );
      if (!response.ok) {
        throw new Error("invalid url");
      }
      const data = await response.json();
      setMyVideos(data.results);
      console.log("videos:", data.results);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <button onClick={fetchVideos}>Fetch videos</button>
      {myVideos.map((item) => (
        <div key={item.title}>
          <p>{item.title}</p>
          <ReactPlayer url={item.link} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Videos;
