import React, {useState, useEffect} from "react";
import axios from "axios";
import PageTitle from "./components/PageTitle/PageTitle.component";
import AstronomyImage from "./components/AstronomyImage/AstronomyImage.component";
import AstronomyMeta from "./components/AstronomyMeta/AstronomyMeta.component";
import  AstronomyDesc from "./components/AstronomyDesc/AstronomyDesc.component";
import DatePicker from "./components/DatePicker/DatePicker.component";

import "./App.css";

const url = "https://api.nasa.gov/planetary/apod";
const api_key = "6h4EPLYjn8d7acXEfpPBYzfIczSScM8LOAMMDc7N";

function App() {
  const [imageData, setImageData] = useState(null);
  const [date, setDate] = useState("2020-01-08");

  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}&date=${date}`)
      .then(res => setImageData(res.data))
      .catch(err => console.error(err));
  }, [date]);

  if (!imageData) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <PageTitle title={imageData.title}/>
      <AstronomyImage imageSource={imageData.url} imageAltText={imageData.title}/>
      <AstronomyMeta date={imageData.date} copyright={imageData.copyright} />
      <AstronomyDesc description={imageData.explanation} />
      <DatePicker date={date} changeHandler={evt => setDate(evt.target.value)}/>
    </div>
  );
}

export default App;
