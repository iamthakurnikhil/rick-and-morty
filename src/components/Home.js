import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";
import Pagination from "./Pagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");

  const { info, results } = fetchedData;

  useEffect(
    function () {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`
        )
        .then((res) => {
          console.log(res.data.results);
          updateFetchedData(res.data);
        });
    },
    [page,status,species,gender],
  );


  function goAhead() {
    setPage(page + 1);
  }

  function goBack() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      <div className="mt-10">
        <div className="w-full text-center text-3xl font-bold">
          Rick & Morty <span className="text-blue-500">WiKi</span>
        </div>
        <Search setSearch={setSearch} setPage={setPage} />
        <Card
          results={results}
          updateStatus={updateStatus}
          updateGender={updateGender}
          updateSpecies={updateSpecies}
          setPage={setPage}
        />
      </div>
      <Pagination pageProp={page} goBack={goBack} goAhead={goAhead} />

    </>
  );
};

export default Home;
