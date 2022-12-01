import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(uri).then((response) => setWeather(response.data));
    setCity("");
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Weather - Projects</title>
        <meta name="author" content="AdryDev | Adry Mateo Ramon" />
        <meta
          name="description"
          content="Weather application using a free api"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main>
        <form onSubmit={fetchWeather} action="#">
          <input
            onChange={({ target }) => setCity(target.value)}
            placeholder="Search City"
            type="text"
          />
          <button onClick={fetchWeather}>Click</button>
        </form>
      </main>
    </>
  );
}
