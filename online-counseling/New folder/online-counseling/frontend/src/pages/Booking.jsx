import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import Button from "../components/Button";

const Booking = () => {
  const { id } = useParams(); // Get counselor ID from URL
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Free"); // Free or Paid

  const handleBooking = async (e) => {
    e.preventDefault();
    const bookingData = { counselorId: id, date, time, type };

    try {
      await axios.post("http://localhost:5000/api/bookings", bookingData);
      alert("Booking successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Booking failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
            <h2 className="text-2xl font-bold text-white text-center">Book a Session</h2>
          </div>
          
          {/* Form */}
          <div className="p-6 sm:p-8">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleBooking}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date:
                  </label>
                  <input 
                    type="date" 
                    id="date"
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time:
                  </label>
                  <input 
                    type="time" 
                    id="time"
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Type:
                  </label>
                  <select 
                    id="type"
                    value={type} 
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
                  >
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg shadow-primary-700/30 transition-all duration-200"
                >
                  Confirm Booking
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
