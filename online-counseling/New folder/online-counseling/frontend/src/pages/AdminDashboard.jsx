import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/counselors">Manage Counselors</Link></li>
        <li><Link to="/admin/bookings">Manage Bookings</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
