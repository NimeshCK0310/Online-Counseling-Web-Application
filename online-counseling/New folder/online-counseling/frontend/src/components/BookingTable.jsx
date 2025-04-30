const BookingTable = ({ bookings }) => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>User {booking.id}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>10:00 AM</td>
              <td>Confirmed</td>
              <td>
                <button>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default BookingTable;
  