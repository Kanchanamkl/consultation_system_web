import { useEffect, useRef, useState } from "react";
import Icons from "../../components/Icons";
import CourtSelector from "../../components/court_selector/CourtSelector";
import DatePicker from "../../components/datepicker/DatePicker";
import BillingPopup from "../../components/billing_popup/BillingPopup";

const BookingPage = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const inputRef = useRef(null);

  const tags = [
    "6.00 AM - 7.00 AM",
    "7.00 AM - 8.00 AM",
    "8.00 AM - 9.00 AM",
    "9.00 AM - 10.00 AM",
    "10.00 AM - 11.00 AM",
    "11.00 AM - 12.00 PM",
    "12.00 PM - 1.00 PM",
    "1.00 PM - 2.00 PM",
    "2.00 PM - 3.00 PM",
    "3.00 PM - 4.00 PM",
    "4.00 PM - 5.00 PM",
    "5.00 PM - 6.00 PM",
    "6.00 PM - 7.00 PM",
    "7.00 PM - 8.00 PM",
    "8.00 PM - 9.00 PM",
    "9.00 PM - 10.00 PM",
    "10.00 PM - 11.00 PM",
    "11.00 PM - 12.00 AM",
    "12.00 AM - 1.00 AM",
    "1.00 AM - 2.00 AM",
    "2.00 AM - 3.00 AM",
    "3.00 AM - 4.00 AM",
    "4.00 AM - 5.00 AM",
    "5.00 AM - 6.00 AM",
  ];

  const filteredTags = tags.filter(
    (item) =>
      item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
      !selected.includes(item)
  );

  const isDisable =
    !query?.trim() ||
    selected.filter(
      (item) =>
        item?.toLocaleLowerCase()?.trim() === query?.toLocaleLowerCase()?.trim()
    )?.length;

  const getFirstDayOfCurrentMonth = () => {
    const now = new Date();
    return new Date();
  };

  const [selectedCourt, setSelectedCourt] = useState("Court 1");
  const [selectedDate, setSelectedDate] = useState(getFirstDayOfCurrentMonth());


//billing popup
const [showPopup, setShowPopup] = useState(false);
const appointmentDetails = {
  date: '2024-09-23',
  court: 'Court 1',
  selectedSlots: ['10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM'],
};

const handleCheckout = () => {
  setShowPopup(true);
};

const closePopup = () => {
  setShowPopup(false);
};

useEffect(() => {

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    setShowPopup(false);

  
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log("Payment dismissed");
  
  };

  window.payhere.onError = function onError(error) {
    console.log("Error: " + error);
   
  };
}, []);


  return (
    <>
      <div className="text-center mb-1 mt-8 pb-10">
        <h1 className="text-6xl font-bold mb-1 text-white">Book Your Slots</h1>
      </div>

      <div className="flex justify-center flex-col items-center bg-blue-950 max-w-fit  mx-auto my-auto rounded-lg h-fit mb-28 p-8">
        <div className="flex gap-20 justify-center pl-5 mt-4">
          <CourtSelector
            selectedCourt={selectedCourt}
            setSelectedCourt={setSelectedCourt}
          />


          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          /> 


        </div>

        <div className="flex justify-center  ">
          <p className="text 2xl font-bold mt-10 text-indigo-300">
            Available Slots on :{" "}
          </p>
          <lable className="text 2xl font-bold mt-10 ml-5 text-white">
            {" "}
            {selectedDate.toLocaleDateString()}{" "}
          </lable>
          <lable className="text 2xl font-bold mt-10 ml-5 text-indigo-300">
            at :{" "}
          </lable>
          <lable className="text 2xl font-bold mt-10 ml-5 text-white">
            {" "}
            {selectedCourt}
          </lable>
        </div>

        <div className=" justify-start mr-60 align-super">
          <p className="text 2xl font-bold mt-7 text-indigo-300">
            Select Your Slots:
          </p>
        </div>

        <div className=" flex justify-center mt-4 h-auto">
          <div className="  w-96 h-auto text-sm">
            {selected?.length ? (
              <div className="bg-white w-full  text-xs flex flex-wrap gap-2 p-2 mb-2 rounded-md">
                <div className="w-full text-left">
                  <span
                    className="text-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelected([]);
                      inputRef.current?.focus();
                    }}
                  >
                    Selected Slots :
                  </span>
                </div>
                {selected.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="rounded-full w-fit py-1.5 px-4 border border-neutral-350 bg-green-600 text-white
                  flex items-center gap-2"
                    >
                      {tag}
                      <div
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() =>
                          setSelected(selected.filter((i) => i !== tag))
                        }
                      >
                        <Icons.Close />
                      </div>
                    </div>
                  );
                })}
                <div className="w-full text-right">
                  <span
                    className="text-gray-700 cursor-pointer"
                    onClick={() => {
                      setSelected([]);
                      inputRef.current?.focus();
                    }}
                  >
                    Clear all
                  </span>
                </div>
              </div>
            ) : null}

            {/* Menu's */}
            {menuOpen ? (
              <div className="card  w-full max-h-52 mt-2 p-1 flex overflow-y-auto scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-slate-200 rounded-md">
                <ul className="w-full">
                  {filteredTags?.length ? (
                    filteredTags.map((tag, i) => (
                      <li
                        key={tag}
                        className="p-2 cursor-pointer hover:bg-slate-200 hover:text-blue-700 rounded-md w-full"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setMenuOpen(true);
                          setSelected((prev) => [...prev, tag]);
                          setQuery("");
                        }}
                      >
                        {tag}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No Slots available</li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className="checkout-btn">
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded-md mt-8"
            onClick={handleCheckout}
          >
            Proceed To Checkout
          </button>
          {showPopup && <BillingPopup appointmentDetails={appointmentDetails} onClose={closePopup} />}

        </div>
      </div>
    </>
  );
};

export default BookingPage;
