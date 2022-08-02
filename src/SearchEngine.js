import React, { useEffect, useState } from "react";

export default function Search({ searcharray }) {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    handleSubmit();
  }, [search]);

  function handleSubmit(event) {
    //

    if (search?.length > 0) {
      const searchData = searcharray?.filter((data) => {
        return data?.includes(search?.toLowerCase());
      });
      setSearchData(searchData);
    }
  }

  function updateCity(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <div className="WeatherSearchEngine">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
          value={search}
        />
        <input type="submit" value="Search" />
      </form>
      {message !== "" && <h2>{message}</h2>}
      {searchData.length > 0 && search.length > 0 ? (
        searchData.map((item) => {
          return <h6>{item}</h6>;
        })
      ) : (
        <h6>{search} not found</h6>
      )}
    </div>
  );
}
