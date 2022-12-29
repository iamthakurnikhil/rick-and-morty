import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Status from "./Status";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Filter = ({ updateSpecies, updateGender, updateStatus, setPage }) => {
  const [open, setOpen] = useState(1);
  const [selected, setSelected] = useState("");

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const status = [
    {
      id: "1",
      title: "Alive",
    },
    {
      id: "2",
      title: "Dead",
    },
    {
      id: "3",
      title: "Unknown",
    },
  ];

  const species = [
    {
      id: "1",
      title: "Human",
    },
    {
      id: "2",
      title: "Alien",
    },
    {
      id: "3",
      title: "Humanoid",
    },
    {
      id: "4",
      title: "Poopybutthole",
    },
    {
      id: "5",
      title: "Mythological",
    },
    {
      id: "6",
      title: "Unknown",
    },
    {
      id: "7",
      title: "Animal",
    },
    {
      id: "8",
      title: "Disease",
    },
    {
      id: "9",
      title: "Robot",
    },
    {
      id: "10",
      title: "Cronenberg",
    },
    {
      id: "11",
      title: "Planet",
    },
  ];

  const Genders = [
    {
      id: "1",
      title: "Female",
    },
    {
      id: "2",
      title: "Male",
    },
    {
      id: "3",
      title: "Genderless",
    },
    {
      id: "4",
      title: "Unknown",
    },
  ];

  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setPage(1);
    window.location.reload(false);
  };

  return (
    <>
      <div className="w-full text-center text-2xl font-bold " >Filter</div>
      <div className="w-full underline text-center text-blue-600 text-lg mt-2 cursor-pointer " onClick={clear}>
        Clear Filters
      </div>
      <div className="ml-10 mt-4  min-h-fit">
        <Fragment>
          <Accordion
            className="min-h-fit"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              className="flex p-1 px-2 rounded-md mb-1 justify-between items-center bg-blue-200"
              onClick={() => handleOpen(1)}
            >
              Status
            </AccordionHeader>
            <AccordionBody className="flex flex-wrap min-h-fit justify-center px-2 items-center space-x-2">
              {status.map((item) => (
                <>
                  <button
                    className={
                      selected == item.id
                        ? "px-2 py-0.5 font-bold bg-blue-600 m-2 border-blue-600  border-2 text-white rounded-md"
                        : "px-2 py-0.5 font-bold border-2 m-2 text-blue-600 border-blue-600 rounded-md"
                    }
                    onClick={() => {
                      updateStatus(item.title);
                      setSelected(item.id);
                      setPage(1);
                    }}
                  >
                    {item.title}
                  </button>
                </>
              ))}
            </AccordionBody>
          </Accordion>
          <Accordion
            className="min-h-fit"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              className="flex p-1 px-2 rounded-md mb-1 min-h-fit justify-between items-center bg-blue-200"
              onClick={() => handleOpen(2)}
            >
              Species
            </AccordionHeader>
            <AccordionBody>
              {species.map((item) => (
                <>
                  <button
                    className={
                      selected == item.id
                        ? "px-2 py-0.5 font-bold bg-blue-600 m-2 border-blue-600  border-2 text-white rounded-md"
                        : "px-2 py-0.5 font-bold border-2 m-2 text-blue-600 border-blue-600 rounded-md"
                    }
                    onClick={() => {
                      updateSpecies(item.title);
                      setSelected(item.id);
                      setPage(1);
                    }}
                  >
                    {item.title}
                  </button>
                </>
              ))}
            </AccordionBody>
          </Accordion>
          <Accordion
            className="min-h-fit"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              className="flex p-1 px-2 min-h-fit rounded-md mb-1 justify-between items-center bg-blue-200"
              onClick={() => handleOpen(3)}
            >
              Gender
            </AccordionHeader>
            <AccordionBody>
              {Genders.map((item) => (
                <>
                  <button
                    className={
                      selected == item.id
                        ? "px-2 py-0.5 font-bold bg-blue-600 m-2 border-blue-600  border-2 text-white rounded-md"
                        : "px-2 py-0.5 font-bold border-2 m-2 text-blue-600 border-blue-600 rounded-md"
                    }
                    onClick={() => {
                      updateGender(item.title);
                      setSelected(item.id);
                      setPage(1);
                    }}
                  >
                    {item.title}
                  </button>
                </>
              ))}
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </>
  );
};

export default Filter;
