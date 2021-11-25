import Calendar from '@/Components/Calendar';
import styles from '@/styles/Home.module.css';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    {
      activityId: `1234`,
      date: `Thu Dec 16 2021 22:26:53 GMT+0100`,
      price: `1600`,
      discountPrice: `1300`,
    },
    {
      activityId: `1212334`,
      date: `Thu Dec 16 2021 22:26:53 GMT+0100`,
      price: `1600`,
      discountPrice: `1300`,
    },
    {
      activityId: `1232134`,
      date: `Thu Jan 16 2022 22:26:53 GMT+0100`,
      price: `1600`,
    },
    {
      activityId: `12345`,
      date: `Sat Nov 27 2021 22:27:52 GMT+0100`,
      price: `2600`,
      discountPrice: `1800`,
    },
    {
      activityId: `1234545`,
      date: `Sat Oct 7 2021 22:27:52 GMT+0100`,
      price: `2600`,
      discountPrice: `1800`,
    },
    {
      activityId: `123124345`,
      date: `Sat Oct 21 2021 22:27:52 GMT+0100`,
      price: `2600`,
    },
    {
      activityId: `123456`,
      date: `Sat Dec 18 2021 22:28:17 GMT+0100`,
      price: `1800`,
    },
    {
      activityId: `1234567`,
      date: `Tue Nov 30 2021 22:28:36 GMT+0100`,
      price: `1900`,
      discountPrice: `1450`,
    },
    {
      activityId: `12345678`,
      date: `Wed Dec 01 2021 22:28:53 GMT+0100`,
      price: `2000`,
      discountPrice: `1500`,
    },
    {
      activityId: `123456789`,
      date: `Thu Dec 02 2021 22:29:02 GMT+0100`,
      price: `2100`,
    },
  ]);
  const generateRandomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(Math.random() * 30));
    console.log(date);
  };

  return (
    <div className="filter antialiased sans-serif bg-gray-100 h-screen">
      {showModal ? (
        <Calendar
          setShowModal={setShowModal}
          locale={`en-EN`}
          events={events}
        />
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

            <button
              className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => generateRandomDate()}
            >
              Generate mock data
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
