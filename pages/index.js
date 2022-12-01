import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setCity("");
    axios.get(uri).then((response) => setWeather(response.data));
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
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

        <main className="fixed flex flex-col w-screen h-screen">
          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]"></div>

          {/* Background Image */}
          <Image
            src={
              "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className={"objet-cover"}
            alt={"Background Image"}
            fill={true}
          />

          {/* Search */}
          <section className="relative flex justify-between items-center max-w-[500] w-full m-auto pt-4 text-white z-[2]">
            <form
              className="flex justify-between items-center w-5/6 m-auto p-3 bg-transparent border border-gray-300 text-white rounded-xl"
              onSubmit={fetchWeather}
              action="#"
            >
              <fieldset>
                <input
                  className="bg-transparent border-none text-white focus:outline-none text-lg"
                  onChange={({ target }) => setCity(target.value)}
                  placeholder="Search City"
                  type="text"
                />
              </fieldset>
              <button className="ml-[-8rem]" onClick={fetchWeather}>
                <BsSearch size={16} />
              </button>
            </form>
          </section>

          {/* Using conditional rendering */}
          {weather.main && <Weather data={weather} />}
        </main>
      </>
    );
  }
}
