import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <article className="relative flex flex-col justify-between w-full h-[90vh] m-auto p-4 text-gray-300 z-[3]">
      <article className="relative flex flex-col items-center pt-12">
        <section className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            width={"100"}
            height={"100"}
          />
          <p className="text-[1.3rem] ml-[-0.7rem] mt-[-1rem] pb-4">
            {data.weather[0].description}
          </p>
        </section>
        <p className="text-6xl pl-4">{data.main.temp.toFixed(0)}&#176;</p>
      </article>

      <article className="bg-black/50 relative p-8 rounded-md">
        <p className="text-xl text-center pb-6">Weather in {data.name}</p>
        <article className="flex justify-between text-center">
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-sm">Feels Like</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-sm">Winds</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">{data.main.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </section>
        </article>
      </article>
    </article>
  );
};

export default Weather;
