import { useEffect, useRef, useState, useContext } from "react";
import DatePicker from "../../components/datepicker/DatePicker";
import BillingPopup from "../../components/billing_popup/BillingPopup";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { StoreContext } from "../../StoreContext/StoreContext";

import "./BookingPageStyels.scss"; // Import the SCSS file

const BookingPage = () => {
  const { selectedConsultant } = useContext(StoreContext);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);
  const { updateSelectedConsultant } = useContext(StoreContext); 

  const navigate = useNavigate();
  const navigateToCounselors = useNavigate();

  const inputRef = useRef(null);

  const tags = [
    "6.00 AM - 8.00 AM",
    "8.00 AM - 10.00 AM",
    "10.00 AM - 12.00 AM",
    "12.00 PM - 2.00 PM",
    "2.00 PM - 4.00 PM",
    "4.00 PM - 6.00 PM",
    "6.00 PM - 8.00 PM",
    "8.00 PM - 10.00 PM",
  ];

  const filteredTags = tags.filter(
    (item) =>
      item.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim()) &&
      !selected.includes(item)
  );

  const isDisable =
    !query.trim() ||
    selected.filter(
      (item) =>
        item.toLocaleLowerCase().trim() === query.toLocaleLowerCase().trim()
    ).length;

  const getFirstDayOfCurrentMonth = () => {
    const now = new Date();
    return new Date();
  };

  const [selectedCourt, setSelectedCourt] = useState("Court 1");
  const [selectedDate, setSelectedDate] = useState(getFirstDayOfCurrentMonth());

  useEffect(() => {
    setSelected([]);
  }, [selectedDate]);

  // Billing popup
  const [showPopup, setShowPopup] = useState(false);
  const appointmentDetails = {
    date: "2024-09-23",
    counselor: "Vrushali Naik",
    selectedSlots: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 PM - 1:00 PM",
    ],
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
      if (orderId) {
        updateSelectedConsultant(null);
      }
      setShowPopup(false);
      navigate("/appointments");
      
    };

    window.payhere.onDismissed = function onDismissed() {
      console.log("Payment dismissed");
    };

    window.payhere.onError = function onError(error) {
      console.log("Error: " + error);
    };
  }, []);

  const location = useLocation();
  const { consultant } = location.state || {}; // Retrieve the consultant object

  return (
    <div className="booking-container">
     {selectedConsultant ? (
        <div className="counselor-container">
          <div className="counselor-container-left">
            <img
              src={selectedConsultant.counselor_img}
              alt={selectedConsultant.name}
              className="consultn-img"
            />
          </div>
          <div className="counselor-container-right">
            <h3 className="consultn-name">{selectedConsultant.name}</h3>
            <p className="consultn-specialize">{selectedConsultant.specialize}</p>
            <p className="consultn-specialize">Email: alicehs@gmail.com</p> 
            <p className="consultn-specialize">Mobile: 076 0570 695</p>
            <p className="consultn-specialize">Country: Sri Lanka</p> 
            <p className="consultn-specialize">City: Colombo</p>


          </div>
        </div>
      ) : navigateToCounselors("/consultants")}

      <div className="slot-selection">
        <div className="selector-section">
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="availability-info">
          <p>Available Slots On:</p>
          <label>{selectedDate.toLocaleDateString()}</label>
        </div>

        {selected.length ? (
          <div className="selected-slots">
            <div className="slot-label">Selected Slots :</div>

            <div className="slot-chips">
              {selected.map((tag) => (
                <div key={tag} className="slot-item">
                  {tag}
                  <div onMouseDown={(e) => e.preventDefault()}>
                    <IoMdCloseCircle
                      onClick={() =>
                        setSelected(selected.filter((i) => i !== tag))
                      }
                      size="20px"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="clear-all" onClick={() => setSelected([])}>
              Clear all
            </div>
          </div>
        ) : null}
        <p>Select Your Slots:</p>
        {menuOpen && (
          <div className="slot-menu">
            <ul>
              {filteredTags.length ? (
                filteredTags.map((tag) => (
                  <li
                    key={tag}
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
                <li>No Slots available</li>
              )}
            </ul>
          </div>
        )}
        <div className="checkout-button">
          <button onClick={handleCheckout}>Proceed To Checkout</button>
          {showPopup && (
            <BillingPopup
              appointmentDetails={appointmentDetails}
              onClose={closePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
