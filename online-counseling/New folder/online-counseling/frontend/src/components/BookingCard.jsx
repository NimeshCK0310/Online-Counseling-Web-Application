import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Card, { CardBody } from "./Card";

const BookingCard = ({ booking }) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // For demo purposes, generate random data
  const randomDate = new Date();
  randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 10));
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const endTime = new Date(randomDate);
  endTime.setHours(endTime.getHours() + 1);
  
  const isUpcoming = randomDate > new Date();
  
  const counselorName = booking.title ? 
    `Dr. ${booking.title.split(' ')[0]}` : 
    `Dr. ${['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'][Math.floor(Math.random() * 5)]}`;
  
  const sessionType = ['Video Call', 'Audio Call', 'Chat Session', 'In-person'][Math.floor(Math.random() * 4)];
  
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      setIsCancelled(true);
    }
  };

  return (
    <Card className={`${isCancelled ? 'bg-gray-50 dark:bg-gray-800/50' : ''} overflow-hidden transition-all duration-300`}>
      <CardBody className="p-0">
        <div className={`px-6 py-4 ${isCancelled ? 'opacity-60' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-700 dark:text-primary-300 font-semibold text-lg mr-4">
                {counselorName.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Session with {counselorName}
                </h3>
                <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{formatDate(randomDate)}</span>
                  <span className="mx-2">•</span>
                  <span>{formatTime(randomDate)} - {formatTime(endTime)}</span>
                </div>
              </div>
            </div>
            <div>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isCancelled
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    : isUpcoming
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {isCancelled ? 'Cancelled' : isUpcoming ? 'Upcoming' : 'Completed'}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center focus:outline-none"
          >
            {isExpanded ? 'Show less' : 'Show details'}
            <svg
              className={`ml-1 h-5 w-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="pt-4 pb-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Session Type</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{sessionType}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Duration</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">60 minutes</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Payment</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">$75.00 (Paid)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Booking ID</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">#{booking.id}</p>
                </div>
              </div>
              
              {booking.body && (
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Session Notes</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{booking.body}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {isUpcoming && !isCancelled && (
          <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
            <Button
              size="sm"
              variant="primary"
              className="bg-primary-600 hover:bg-primary-700"
            >
              Join Session
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default BookingCard;
