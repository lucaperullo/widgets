import { Button, IconButton } from '@mui/material';
import { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';

const Calendar = (props: any) => {
  const { setShowModal, locale, events } = props;
  const [today, setToday] = useState(new Date());

  const [monthString, setMonthString] = useState(
    today.toLocaleString(locale, { month: `long` }),
  );

  const [month, setLMonth] = useState(today.getMonth() + 1);
  const [year, setLYear] = useState(today.getFullYear());

  const daysArray = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`];

  const nextMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() + 1)));
    setLMonth(today.getMonth() + 1);
    setLYear(today.getFullYear());
    setMonthString(today.toLocaleString(locale, { month: `long` }));
  };
  const prevMonth = () => {
    setToday(new Date(today.setMonth(today.getMonth() - 1)));
    setLMonth(today.getMonth() + 1);
    setLYear(today.getFullYear());
    setMonthString(today.toLocaleString(locale, { month: `long` }));
  };

  const addEventsToDays = (days: any) => {
    events.forEach((event: any) => {
      // console.log(event);
      const eventDate = new Date(event.date);
      const eventMonth = eventDate.getMonth() + 1;
      const eventYear = eventDate.getFullYear();
      const eventDay = eventDate.getDate();
      console.log({ eventMonth, month, eventDay });
      if (eventMonth === month && eventYear === year) {
        days.forEach((day: any, i: any) => {
          if (day !== null && day.i == eventDay) {
            console.log(`event match found!`);
            day.event = event;

            // day = { i:number, event: event };
            // console.log(day.event, day.i);
          } else {
            console.log(`No events found`);
          }
        });
      }
    });
    console.log(days);
    return days;
  };

  useEffect(() => {
    addEventsToDays(reorderedDays(today, month, year));
    console.log(month);
  }, [month]);

  const reorderedDays = (date: any, month: any, year: any) => {
    function daysInMonth(month: any, year: any) {
      return new Date(year, month, 0).getDate();
    }
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth(month, year); i++) {
      days.push({ i, event: null });
    }

    return days;
  };

  return (
    <>
      <div
        style={{ backgroundColor: '#000000a1' }}
        className="flex flex-shrink w-100 h-100 justify-top overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="w-screen mx-auto max-w-3xl">
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
                style={{
                  color: `#e28579`,
                  padding: `8px`,
                  transform: `rotate(180deg)`,
                }}
                onClick={() => prevMonth()}
              >
                <ArrowForwardIosIcon />
              </IconButton>
              <h3
                style={{ minWidth: `270px` }}
                className="text-3xl font-bold align-center text-center"
              >
                {monthString.charAt(0).toUpperCase() +
                  monthString.slice(1) +
                  ` ` +
                  year}
              </h3>

              <IconButton
                style={{ color: `#e28579` }}
                onClick={() => nextMonth()}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>

            <div className="days-container">
              <div className="days flex flex-wrap">
                {addEventsToDays(reorderedDays(today, month, year)).map(
                  (v: any, i: number) => (
                    <div
                      key={i}
                      className="day"
                      onClick={(e: any) => alert(e.target.innerText)}
                    >
                      <div
                        onClick={(e) => {
                          e.currentTarget.classList.value === `cell`
                            ? e.currentTarget.classList.add(`selected`)
                            : e.currentTarget.classList.remove(`selected`);
                        }}
                        className="cell flex-shrink w-100 h-100"
                      >
                        {i < 7 && (
                          <div className="day-name">{daysArray[i]}</div>
                        )}

                        {v && v.event !== null && v.event.discountPrice && (
                          <img
                            src="https://media.discordapp.net/attachments/912367384118063156/913001547070328872/discounticon.png"
                            className="discount-icon"
                          />
                        )}
                        {v && !v.event && (
                          <div style={{ height: `20px` }}></div>
                        )}
                        {v && v.event !== null && !v.event.discountPrice ? (
                          <img
                            src="https://media.discordapp.net/attachments/912367384118063156/913452129337901076/icons8-calendario-a-foglietti-48.png"
                            className="discount-icon"
                          />
                        ) : null}
                        {v && v.event !== null ? (
                          <span className="day-number">
                            {v !== null ? v.i : null}
                          </span>
                        ) : (
                          <span className="day-number-empty">
                            {v !== null ? v.i : null}
                          </span>
                        )}

                        {v !== null && v.event !== null ? (
                          <div className="price-container">
                            {v !== null &&
                            v.event !== null &&
                            v.event.discountPrice &&
                            v.event.price ? (
                              <div className="price-discount">
                                Da {v.event.price}€
                              </div>
                            ) : (
                              <div className="price">Da {v.event.price}€</div>
                            )}

                            {v && v.event !== null && v.event.discountPrice ? (
                              <div className="price-discounted">
                                {v.event.discountPrice}€
                              </div>
                            ) : null}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ),
                )}
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
                className="capitalize"
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
                className="capitalize"
              >
                Prosegui
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Calendar;
