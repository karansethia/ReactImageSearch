import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import InputField from "./components/InputField";
import ImageContainer from "./components/ImageContainer";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("developer");

  //* function to change query acc to input value
  const onSetQueryHandler = (str) => {
    setQuery(str);
  };
  axios.defaults.baseURL = "https://api.unsplash.com";
  let url = `search/photos?page=1&query=${query}&client_id=${
    import.meta.env.VITE_UNSPLASH_API
  }`;

  const fetchData = async (queryUrl) => {
    try {
      const res = await axios(queryUrl);
      setData(res.data.results);
    } catch (erorr) {
      setError(error);
      throw new Error(error);
    }
  };
  //* useeffect to call the api via axios
  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(data);
  return (
    <div>
      <Navbar />
      <InputField onSet={onSetQueryHandler} />
      <ImageContainer data={data} />
    </div>
  );
};

export default App;
