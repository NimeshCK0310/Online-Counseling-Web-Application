import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import Card, { CardBody, CardFooter } from "./Card";

const specialties = [
  "Anxiety",
  "Depression",
  "Relationships",
  "Stress",
  "Trauma",
  "Family Issues",
  "Grief",
  "Self-Esteem",
  "Career"
];

// Generate random specialties for demo purposes
const getRandomSpecialties = () => {
  const count = Math.floor(Math.random() * 3) + 2; // 2-4 specialties
  const result = [];
  const available = [...specialties];
  
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * available.length);
    result.push(available.splice(index, 1)[0]);
  }
  
  return result;
};

const CounselorCard = ({ counselor }) => {
  // For demo, generate ratings and specialties
  const rating = (Math.floor(Math.random() * 15) + 35) / 10; // 3.5-5.0 rating
  const counselorSpecialties = getRandomSpecialties();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col">
        <CardBody className="flex-grow">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {counselor.name.charAt(0)}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{counselor.name}</h3>
              <div className="mt-1 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{rating.toFixed(1)}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {(Math.floor(Math.random() * 200) + 10)} sessions
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {counselor.email}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Specialties</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {counselorSpecialties.map((specialty, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Licensed counselor with expertise in {counselorSpecialties.join(', ')}. Helping clients navigate life's challenges with compassion and evidence-based approaches.
          </p>
        </CardBody>
        
        <CardFooter className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              ${(45 + Math.floor(Math.random() * 50))}/hr
            </div>
            <Button
              as={Link}
              to={`/book/${counselor.id}`}
              variant="primary"
              size="md"
            >
              Book Session
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CounselorCard;
