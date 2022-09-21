import React from "react";
import { useState, useCallback } from "react";

const Images = () => {
  const [error, setError] = useState(null);
  const [myImage, setMyImage] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "EU",
      "X-RapidAPI-Key": "d532d97021msh068e487b5bca360p130386jsn4e4533c1c759",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
    },
  };

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(
        "https://google-search3.p.rapidapi.com/api/v1/image/q=tesla",
        options
      );
      if (!response.ok) {
        throw new Error("invalid url");
      }
      const data = await response.json();
      setMyImage(data.image_results);
      console.log(data.image_results);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <React.Fragment>
      <button onClick={fetchImages}>Fetch images</button>
      {myImage.map((item) => (
        <img src={item.image.src} alt={item.image.alt} key={item.image.src} />
      ))}
    </React.Fragment>
  );
};

export default Images;
