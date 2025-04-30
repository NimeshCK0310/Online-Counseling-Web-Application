import { useEffect, useState } from "react";
import CounselorCard from "../components/CounselorCard";
import axios from "axios";
import { motion } from "framer-motion";
import Input from "../components/Input";

const Counselors = () => {
  const [counselors, setCounselors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const specialties = [
    "Anxiety", "Depression", "Relationships", "Stress", 
    "Trauma", "Family Issues", "Grief", "Self-Esteem", "Career"
  ];

  useEffect(() => {
    const fetchCounselors = async () => {
      setLoading(true);
      try {
        // Replace with backend API call later
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setCounselors(response.data);
        setError("");
      } catch (err) {
        setError("Failed to fetch counselors. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCounselors();
  }, []);

  const handleSpecialtyToggle = (specialty) => {
    setSelectedSpecialties(prev => {
      if (prev.includes(specialty)) {
        return prev.filter(item => item !== specialty);
      } else {
        return [...prev, specialty];
      }
    });
  };

  const filteredCounselors = counselors.filter(counselor => {
    return counselor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           counselor.email.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Professional Counselors
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Connect with licensed professionals who can help you navigate life's challenges
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6" data-aos="fade-right">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Search Counselors
            </h3>
            <Input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              className="mb-4"
            />
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              Filter by Specialty
            </h3>
            <div className="space-y-2">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-center">
                  <input
                    id={`specialty-${specialty}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
                    checked={selectedSpecialties.includes(specialty)}
                    onChange={() => handleSpecialtyToggle(specialty)}
                  />
                  <label
                    htmlFor={`specialty-${specialty}`}
                    className="ml-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    {specialty}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-300 mb-2">
              Need Help Choosing?
            </h3>
            <p className="text-sm text-primary-700 dark:text-primary-400 mb-4">
              Our matching service can help you find the right counselor for your needs.
            </p>
            <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Find My Match
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 p-8 rounded-xl text-center">
              {error}
            </div>
          ) : filteredCounselors.length === 0 ? (
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl text-center">
              <p className="text-gray-600 dark:text-gray-400">No counselors found matching your criteria.</p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredCounselors.map((counselor) => (
                <motion.div key={counselor.id} variants={item} data-aos="fade-up">
                  <CounselorCard counselor={counselor} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counselors;
