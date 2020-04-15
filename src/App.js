import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";

const url = "https://api.nasa.gov/planetary/apod";
const api_key = "6h4EPLYjn8d7acXEfpPBYzfIczSScM8LOAMMDc7N";

function App() {
  const [imageData, setImageData] = useState({});

  useEffect(() => {
    axios.get(`${url}?api_key=${api_key}`)
      .then(res => setImageData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
