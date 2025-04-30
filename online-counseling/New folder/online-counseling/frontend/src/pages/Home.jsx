import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Begin Your Journey to Mental Wellness
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-primary-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Connect with certified counselors online, anytime, anywhere. Start your path to a healthier mind today.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  as={Link} 
                  to="/register" 
                  size="lg" 
                  variant="primary" 
                  className="bg-primary-200 text-primary-900 hover:bg-primary-300 font-bold shadow-lg shadow-primary-700/30"
                >
                  Get Started
                </Button>
                <Button 
                  as={Link} 
                  to="/counselors" 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary-200 text-white hover:bg-primary-700 hover:text-white shadow-lg shadow-primary-900/20"
                >
                  Meet Our Counselors
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img 
                src="/images/hero-image.svg" 
                alt="Online counseling illustration" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Online Counseling
            </h2>
            <p className="text-xl text-gray-600">
              Professional support tailored to your needs, with flexibility and privacy in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certified Professionals",
                description: "Connect with licensed therapists and counselors with years of experience.",
                icon: "👨‍⚕️",
                delay: 0
              },
              {
                title: "Flexible Scheduling",
                description: "Book sessions that fit your schedule, without commuting or waiting rooms.",
                icon: "🕒",
                delay: 0.2
              },
              {
                title: "Complete Privacy",
                description: "Communicate securely and confidentially from the comfort of your home.",
                icon: "🔒",
                delay: 0.4
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={feature.delay * 1000}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from people who have transformed their lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The counseling sessions have been life-changing. I've gained new perspectives and tools that help me daily.",
                author: "Sarah J.",
                role: "Client since 2022",
                delay: 0
              },
              {
                quote: "Being able to connect with my therapist from anywhere has made consistency possible for me. It's been transformative.",
                author: "Michael T.",
                role: "Client since 2021",
                delay: 0.2
              },
              {
                quote: "I was skeptical about online counseling at first, but the experience has been even better than in-person therapy for me.",
                author: "Elena R.",
                role: "Client since 2023",
                delay: 0.4
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-md"
                data-aos="fade-up"
                data-aos-delay={testimonial.delay * 1000}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-primary-600">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="mt-auto pt-4 border-t border-primary-100">
                    <p className="text-lg font-bold text-primary-700 dark:text-primary-500">{testimonial.author}</p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Take the first step towards a healthier mind and better well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as={Link} 
                to="/register" 
                size="lg" 
                variant="primary" 
                className="bg-primary-200 text-primary-900 hover:bg-primary-300 font-bold shadow-lg shadow-primary-700/30"
              >
                Create Your Account
              </Button>
              <Button 
                as={Link} 
                to="/counselors" 
                size="lg" 
                variant="outline"
                className="border-2 border-primary-200 text-white hover:bg-primary-700 hover:text-white shadow-lg shadow-primary-900/20"
              >
                Browse Counselors
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
