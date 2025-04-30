import { useState } from "react";
import { motion } from "framer-motion";
import ActivityCard from "../components/ActivityCard";
import Input from "../components/Input";

const ActivityList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const activities = [
    {
      id: 1,
      title: "Memory Puzzle",
      description: "Improve your focus with this memory game.",
      link: "https://www.memozor.com/memory-games/for-kids/online-and-free",
      tags: ["Memory", "Focus", "Beginner"],
      category: "games",
      progress: 75,
      isNew: false,
    },
    {
      id: 2,
      title: "Emotion Match",
      description: "Match facial expressions to emotions and build emotional intelligence.",
      link: "https://example.com/emotion-match",
      tags: ["Emotional Intelligence", "Interactive"],
      category: "games",
      progress: 30,
      isNew: true,
    },
    {
      id: 3,
      title: "Guided Meditation",
      description: "A 10-minute guided meditation for stress relief and mental clarity.",
      link: "https://example.com/meditation",
      tags: ["Relaxation", "Mindfulness", "Audio"],
      category: "mindfulness",
      progress: 0,
      isNew: true,
    },
    {
      id: 4,
      title: "CBT Workbook",
      description: "Interactive cognitive behavioral therapy exercises to challenge negative thoughts.",
      link: "https://example.com/cbt-exercises",
      tags: ["CBT", "Self-Help", "Intermediate"],
      category: "therapy",
      progress: 45,
      isNew: false,
    },
    {
      id: 5,
      title: "Breathing Exercises",
      description: "Learn different breathing techniques to manage anxiety and stress.",
      link: "https://example.com/breathing",
      tags: ["Anxiety", "Stress", "Beginner"],
      category: "mindfulness",
      progress: 90,
      isNew: false,
    },
    {
      id: 6,
      title: "Journal Prompts",
      description: "Daily prompts to encourage reflection and emotional processing.",
      link: "https://example.com/journal",
      tags: ["Journaling", "Reflection", "Daily"],
      category: "therapy",
      progress: 15,
      isNew: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Activities" },
    { id: "games", name: "Games" },
    { id: "mindfulness", name: "Mindfulness" },
    { id: "therapy", name: "Therapy Tools" },
  ];

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         activity.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
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
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Activities & Games
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore interactive activities designed to support your mental health journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Find Activities
              </h3>
              <Input
                type="text"
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                className="mb-4"
              />
              
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                          : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/30'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-300 mb-2">
                Need Help?
              </h3>
              <p className="text-sm text-primary-700 dark:text-primary-400 mb-4">
                Our support team can recommend activities based on your needs.
              </p>
              <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {filteredActivities.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No activities found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filteredActivities.map((activity) => (
                <motion.div key={activity.id} variants={item} data-aos="fade-up">
                  <ActivityCard {...activity} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
