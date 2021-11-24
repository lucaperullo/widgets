import Modal from '@/Components/Modal';
import styles from '@/styles/Home.module.css';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="filter antialiased sans-serif bg-gray-100 h-screen">
      {showModal ? (
        <Modal setShowModal={setShowModal} locale={`en-EN`} />
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
