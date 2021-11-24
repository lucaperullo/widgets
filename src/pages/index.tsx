import styles from '@/styles/Home.module.css';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Home() {
  const [today, setToday] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const [monthString, setMonthString] = useState(
    today.toLocaleString(`default`, { month: `long` }),
  );
  const [yearString, setYearString] = useState(today.getFullYear());

  const nextMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() + 1)));
    setMonthString(today.toLocaleString(`default`, { month: `long` }));
    setYearString(today.getFullYear());
  };
  const prevMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() - 1)));
    setMonthString(today.toLocaleString(`default`, { month: `long` }));
    setYearString(today.getFullYear());
  };

  const getDaysInMonth = (month: any, year: any) =>
    new Array(31)
      .fill(``)
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
                    Sicilia: tutta l&apos;isola in un viaggio solo!
                  </h2>
                  <IconButton
                    style={{ color: `#e28579` }}
                    className="rounded-md"
                    onClick={() => setShowModal(false)}
                    aria-label="close"
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
                  </IconButton>
                </div>
                {/*body*/}
                <div className="flex justify-center w-100 py-7 align-center">
                  <IconButton
                    style={{ fontSize: `12px` }}
                    onClick={() => prevMonth()}
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
                    </svg>
                  </IconButton>
                  <h3
                    style={{ minWidth: `270px` }}
                    className="text-3xl font-bold align-center text-center"
                  >
                    {monthString.charAt(0).toUpperCase() +
                      monthString.slice(1) +
                      ` ` +
                      yearString}
                  </h3>

                  <IconButton onClick={() => nextMonth()}>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg>
                  </IconButton>
                </div>
                <div className="days-container">
                  <div className="days flex flex-wrap ">
                    {getDaysInMonth(
                      today.getMonth() + 1,
                      today.getFullYear(),
                    ).map((v, i) => (
                      <div
                        key={i}
                        className="day"
                        onClick={(e: any) => console.log(e.target.innerText)}
                      >
                        <div
                          onClick={(e) => {
                            e.currentTarget.classList.value === `cell`
                              ? e.currentTarget.classList.add(`selected`)
                              : e.currentTarget.classList.remove(`selected`);
                          }}
                          className="cell"
                        >
                          <img
                            src="https://media.discordapp.net/attachments/912367384118063156/913001547070328872/discounticon.png"
                            className="discount-icon"
                          />
                          <span className="day-number">{v.getDate()}</span>
                          <div className="price-container">
                            <div className="price-discount">Da 1099.99€</div>
                            <div className="price-discounted">899.90€</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    style={{
                      fontWeight: 600,
                      color: `#000`,
                      borderColor: `#000`,
                      border: `2px solid #000`,
                      marginRight: `10px`,
                      borderRadius: `10px`,
                      padding: `5px`,
                      width: `120px`,
                    }}
                    onClick={() => setShowModal(false)}
                    variant="outlined"
                  >
                    Annulla
                  </Button>
                  <Button
                    style={{
                      fontWeight: 600,
                      color: `#fff`,
                      backgroundColor: `#ec5a4b`,
                      marginRight: `10px`,
                      borderRadius: `10px`,
                      padding: `7px`,
                      width: `120px`,
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Prosegui
                  </Button>
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
