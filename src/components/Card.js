import React from "react";
import Filter from "./Filter";
import Status from "./Status";

const Card = ({ results, updateSpecies, updateGender, updateStatus ,setPage }) => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filter
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPage={setPage}
          />
        </div>
        <div className="col-span-8 ml-14 ">
          <div className="grid grid-cols-3">
            {results &&
              results.map(({ id, image, name, location, status }) => (
                <div
                  key={id}
                  className="h-76 border-2 rounded-xl  w-[13rem] mb-6 relative border-cyan-500"
                >
                  <img
                    className="rounded-t-xl h-[30vh] w-[13rem]"
                    src={image}
                  ></img>
                  <div className="w-full text-center mt-1 text-2xl font-semibold">
                    {name}
                  </div>
                  <div className="mt-1 ml-2 text-gray-700 ">Last Location</div>
                  <div className="ml-2 mb-2 font-semibold text-lg ">
                    {location.name}
                  </div>
                  <Status status={status} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
