import { useEffect, useState } from "react";
import CounselorTable from "../components/CounselorTable";
import axios from "axios";

const ManageCounselors = () => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    // Replace with actual API later
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setCounselors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Manage Counselors</h2>
      <CounselorTable counselors={counselors} />
    </div>
  );
};

export default ManageCounselors;
