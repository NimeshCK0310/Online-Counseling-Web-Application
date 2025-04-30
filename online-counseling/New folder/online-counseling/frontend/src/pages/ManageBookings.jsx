import { useEffect, useState } from "react";
import BookingTable from "../components/BookingTable";
import axios from "axios";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Manage Bookings</h2>
      <BookingTable bookings={bookings} />
    </div>
  );
};

export default ManageBookings;
