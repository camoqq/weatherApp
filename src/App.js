import React from "react";
import Description from "./Description";
import useFetch from "./useFetch";

function App() {
  const { city, searchLoc, setCity, data, error, loading } = useFetch();

  return (
    <div>
      <Description
        city={city}
        searchLoc={searchLoc}
        setCity={setCity}
        data={data}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default App;
