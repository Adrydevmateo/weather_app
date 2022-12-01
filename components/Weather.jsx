import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <article className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <article className="relative flex justify-between pt-12">
        <section className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            width={"100"}
            height={"100"}
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </section>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </article>

      <article className="bg-black/50 relative p-8 rounded-md">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <article className="flex justify-between text-center">
          <section>
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-xl">Feels Like</p>
          </section>
          <section>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="text-xl">Humidity</p>
          </section>
          <section>
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-xl">Winds</p>
          </section>
        </article>
      </article>
    </article>
  );
};

export default Weather;
