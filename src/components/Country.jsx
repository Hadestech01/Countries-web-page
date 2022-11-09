import React from "react";
import CountryCards from "./CountryCards";

function Country({ countries }) {
  return (
    <div className="container grid md:m-auto md:grid-cols-4 gap-4 dark:bg-gray-800 dark:text-white">
      {countries.map((country, index) => {
        return <CountryCards country={country} key={index} />;
      })}
    </div>
  );
}

export default Country;
