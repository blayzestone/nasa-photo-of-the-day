import React, {useState, useEffect} from "react";
import axios from "axios";
import PageTitle from "./components/PageTitle/PageTitle.component";
import AstronomyImage from "./components/AstronomyImage/AstronomyImage.component";
import AstronomyMeta from "./components/AstronomyMeta/AstronomyMeta.component";
import  AstronomyDesc from "./components/AstronomyDesc/AstronomyDesc.component";
import DatePicker from "./components/DatePicker/DatePicker.component";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.component";
import LoadingWheel from "./components/LoadingScreen/LoadingWheel.component"; 

import "./App.css";

const url = "https://api.nasa.gov/planetary/apod";
const api_key = "6h4EPLYjn8d7acXEfpPBYzfIczSScM8LOAMMDc7N";

function App() {
  const [imageData, setImageData] = useState(null);
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios.get(`${url}?api_key=${api_key}&date=${date}`)
      .then(res => setImageData(res.data))
      .then(() => setIsLoading(false)) // Set isLoading to false after recieving data
      .catch(err => console.error(err));
  }, [date]);

  if (isLoading) return(
    <LoadingScreen>
      <LoadingWheel />
    </LoadingScreen>
  );

  return (
    <div className="App">
      <PageTitle>imageData.title</PageTitle>
      <AstronomyImage imageSource={imageData.url} imageAltText={imageData.title}/>
      <AstronomyMeta date={imageData.date} copyright={imageData.copyright} />
      <AstronomyDesc>{imageData.explanation}</AstronomyDesc>
      <DatePicker date={date} changeHandler={evt => setDate(evt.target.value)}/>
    </div>
  );
}

export default App;
