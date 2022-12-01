import React from "react";
import Image from "next/image";

const Weather = ({ data }) => {
  return (
    <article className="relative flex flex-col justify-between items-center w-full h-[90vh] m-auto p-4 text-gray-300 z-[3] sm:pt-8 md:pt-9">
      <article className="relative flex flex-col items-center pt-12 sm:flex-row sm:justify-center sm:gap-4 md:gap-8">
        <section className="flex flex-col items-center">
          <Image
            className={"sm:w-[8.3rem] md:w-[8.8rem]"}
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            width={"100"}
            height={"100"}
          />
          <p className="text-[1.3rem] ml-[-0.7rem] mt-[-1rem] pb-4 sm:text-[1.5rem] md:text-[1.8rem]">
            {data.weather[0].description}
          </p>
        </section>
        <p className="text-6xl pl-4 sm:text-8xl md:text-[6.9rem]">
          {data.main.temp.toFixed(0)}&#176;
        </p>
      </article>

      <article className="bg-black/50 relative p-8 rounded-md lg:w-[80%]">
        <p className="text-xl text-center pb-6 sm:text-3xl md:text-4xl">
          Weather in {data.name}
        </p>
        <article className="flex justify-between text-center">
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base sm:text-[1.5rem] md:text-[1.7rem]">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p className="text-sm sm:text-lg md:text-xl">Feels Like</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base sm:text-[1.5rem] md:text-[1.7rem]">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p className="text-sm sm:text-lg md:text-xl">Winds</p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <p className="font-bold text-base sm:text-[1.5rem] md:text-[1.7rem]">
              {data.main.humidity}%
            </p>
            <p className="text-sm sm:text-lg md:text-xl">Humidity</p>
          </section>
        </article>
      </article>
    </article>
  );
};

export default Weather;
