import React from "react";

const Status = ({ status }) => {
  return (
    <>
      {(() => {
        if (status === "Alive") {
          return (
            <div className="bg-green-800 max-w-fit px-2 py-0.5 font-bold absolute top-2 right-1 text-white rounded-md">
              {status}
            </div>
          );
        } else if (status === "Dead") {
          return (
            <div className="bg-red-600 max-w-fit px-2 py-0.5 font-bold absolute top-2 right-1 text-white rounded-md">
              {status}
            </div>
          );
        } else {
          return (
            <div className="bg-gray-600 max-w-fit px-2 py-0.5 font-bold absolute top-2 right-1 text-white rounded-md">
              {status}
            </div>
          ); 
        }
      })()}
    </>
  );
};

export default Status;
