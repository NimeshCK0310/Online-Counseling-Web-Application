import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookingCard from "../components/BookingCard";
import Button from "../components/Button";
import Card, { CardBody, CardHeader } from "../components/Card";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({ name: "John Doe", email: "john@example.com" }); // Mock user data
  const [stats, setStats] = useState({
    completedSessions: 12,
    upcomingSessions: 3,
    activitiesCompleted: 8,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        setBookings(res.data);
        
        // In a real app, you would fetch user data here
        // const userData = await axios.get('/api/me');
        // setUser(userData.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardBody>
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{user.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
              
              <div className="space-y-3">
                <Button
                  as={Link}
                  to="/profile"
                  variant="outline"
                  fullWidth
                  className="justify-start"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  My Profile
                </Button>
                <Button
                  as={Link}
                  to="/settings"
                  variant="outline"
                  fullWidth
                  className="justify-start"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  fullWidth
                  className="justify-start text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <div className="mt-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-300 mb-2">
              Need Help?
            </h3>
            <p className="text-sm text-primary-700 dark:text-primary-400 mb-4">
              Our support team is here to assist you with any questions or concerns.
            </p>
            <Button
              as="a"
              href="mailto:support@onlinecounseling.com"
              variant="outline"
              className="w-full border-primary-600 text-primary-600"
            >
              Contact Support
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <CardBody className="text-center">
                  <div className="text-3xl font-bold mb-1">{stats.completedSessions}</div>
                  <div className="text-sm text-primary-100">Completed Sessions</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white">
                <CardBody className="text-center">
                  <div className="text-3xl font-bold mb-1">{stats.upcomingSessions}</div>
                  <div className="text-sm text-secondary-100">Upcoming Sessions</div>
                </CardBody>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white">
                <CardBody className="text-center">
                  <div className="text-3xl font-bold mb-1">{stats.activitiesCompleted}</div>
                  <div className="text-sm text-purple-100">Activities Completed</div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
          
          {/* Upcoming Sessions */}
          <Card>
            <CardHeader className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Bookings</h2>
              <Button as={Link} to="/counselors" variant="primary" size="sm">
                Book New Session
              </Button>
            </CardHeader>
            <CardBody>
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary-600"></div>
                </div>
              ) : bookings.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No bookings</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    You don't have any scheduled sessions yet.
                  </p>
                  <div className="mt-6">
                    <Button as={Link} to="/counselors" variant="primary">
                      Book Your First Session
                    </Button>
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="space-y-4"
                >
                  {bookings.map((booking) => (
                    <motion.div key={booking.id} variants={item}>
                      <BookingCard booking={booking} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </CardBody>
          </Card>
          
          {/* Activities */}
          <Card>
            <CardHeader className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                My Games & Activities
              </h2>
              <Button as={Link} to="/activities" variant="primary" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="hover:border-primary-300 transition-colors duration-200">
                    <CardBody className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg mr-4">
                          <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            Activity #{item}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Last played 2 days ago
                          </p>
                          <div className="mt-2 flex space-x-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
