import React, {useState, useEffect} from "react";
import axios from "axios";
import PageTitle from "./components/PageTitle/PageTitle.component";
import AstronomyImage from "./components/AstronomyImage/AstronomyImage.component";
import AstronomyMeta from "./components/AstronomyMeta/AstronomyMeta.component";
import  AstronomyDesc from "./components/AstronomyDesc/AstronomyDesc.component";

import "./App.css";

const url = "https://api.nasa.gov/planetary/apod";
const api_key = "6h4EPLYjn8d7acXEfpPBYzfIczSScM8LOAMMDc7N";

function App() {
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    const dummyImageData = {
      copyright: "ScottAspinall",
      date: "2020-04-15",
      explanation: "It was an astronomical triple play. Setting on the left, just after sunset near the end of last month, was our Moon -- showing a bright crescent phase.  Setting on the right was Venus, the brightest planet in the evening sky last month -- and this month, too.  With a small telescope, you could tell that Venus' phase was half, meaning that only half of the planet, as visible from Earth, was exposed to direct sunlight and brightly lit. High above and much further in the distance was the Pleiades s...",
      title: "A Cosmic Triangle",
      url: "https://apod.nasa.gov/apod/image/2004/MVP_Aspinall_960.jpg"
    }
    setImageData(dummyImageData)

    /*axios.get(`${url}?api_key=${api_key}`)
      .then(res => setImageData(res.data))
      .catch(err => console.error(err)); */
  }, []);

  return (
    <div className="App">
      <PageTitle title={imageData.title}/>
      <AstronomyImage imageSource={imageData.url} imageAltText={imageData.title}/>
      <AstronomyMeta date={imageData.date} copyright={imageData.copyright} />
      <AstronomyDesc description={imageData.explanation} />
    </div>
  );
}

export default App;
