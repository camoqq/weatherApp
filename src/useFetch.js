import { useState } from "react";

const useFetch = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=a973f7287476defd094b47349f1d54ee`;

  const searchLoc = (e) => {
    if (e.key === "Enter") {
      setLoading(true);

      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setTimeout(() => setLoading(false), 500);
          setCity("");
        })
        .catch((error) => console.log("error"));
    }
  };
  return { city, data, searchLoc, setCity, loading };
};

export default useFetch;
