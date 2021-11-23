import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [today, setToday] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const [monthString, setMonthString] = useState(
    today.toLocaleString("default", { month: "long" }),
  );
  const [yearString, setYearString] = useState(today.getFullYear());

  const nextMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() + 1)));
    setMonthString(today.toLocaleString("default", { month: "long" }));
    setYearString(today.getFullYear());
  };
  const prevMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() - 1)));
    setMonthString(today.toLocaleString("default", { month: "long" }));
    setYearString(today.getFullYear());
  };

  const selectDay = (day: number) => {
    setToday(new Date(today.setDate(day)));
  };

  const selectYear = (year: number) => {
    setToday(new Date(today.setFullYear(year)));
  };

  const getDaysInMonth = (month: any, year: any) =>
    new Array(31)
      .fill('")
      .map((v, i) => new Date(year, month - 1, i + 1))
      .filter((v) => v.getMonth() === month - 1);

  return (
    <div className="filter antialiased sans-serif bg-gray-100 h-screen">
      {showModal ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                  <h2 className="font-bold text-xl">
                    Sicilia: tutta l"isola in un viaggio solo!
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className="bg-white rounded-md p-1 inline-flex items-center justify-center text-red-400 hover:text-red-500 hover:bg-gray-100 focus:outline-none focus:text-yellow-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className="flex justify-center w-100 py-7 align-center">
                  <button
                    onClick={() => prevMonth()}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    {"<"}
                  </button>
                  <h3
                    style={{ minWidth: "270px" }}
                    className="text-3xl font-semibold align-center text-center"
                  >
                    {monthString.charAt(0).toUpperCase() +
                      monthString.slice(1) +
                      " " +
                      yearString}
                  </h3>
                  <button
                    onClick={() => nextMonth()}
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-red-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    {">"}
                  </button>
                </div>
                <div className="days flex flex-wrap border-t border-l">
                  {getDaysInMonth(
                    today.getMonth() + 1,
                    today.getFullYear(),
                  ).map((v, i) => (
                    <div
                      key={i}
                      onClick={(e) => {
                        e.currentTarget.classList.value === "cell"
                          ? e.currentTarget.classList.add("selected")
                          : e.currentTarget.classList.remove("selected");
                      }}
                      className="cell"
                    >
                      <div onClick={(e: any) => console.log(e.target)}>
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-grey-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Annulla
                  </button>
                  <button
                    className="bg-yellow-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Prosegui
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="container blur-3xl mx-auto px-4 py-2 md:py-24">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex items-center justify-between py-2 px-6">
            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Calendario
            </button>

            <div>
              <span
                x-text="MONTH_NAMES[month]"
                className="text-lg font-bold text-gray-800"
              ></span>
              <span
                x-text="year"
                className="ml-1 text-lg text-gray-600 font-normal"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
