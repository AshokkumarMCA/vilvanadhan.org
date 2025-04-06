import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css'
import Nav from './components/navigation/Nav';

// Import your actual logo images when available
export const ShivaLogo = () => (
  <div className="text-4xl font-bold text-orange-600">ॐ</div>
);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-amber-200 text-orange-900 dark:bg-white dark:text-white" style={{backgroundImage:"url('./images/background.png')"}}>
      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-orange-100/95 shadow-md py-2' : 'bg-transparent py-2'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <ShivaLogo />
          <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-serif text-orange-800">ஸ்ரீ வில்வநாதீஸ்வரர் திருக்கோவில்</h1>
            <h2 className="text-2xl md:text-3xl font-serif text-orange-800">Sri Vilvanadha Ishwarar Temple</h2>
            <h2 className="text-lg md:text-xl font-serif italic text-orange-600">Kilvillivalam</h2>
          </div>
          <ShivaLogo />
        </div>
        <Nav/>  
      </header>

      {/* Main Content with Emerald Green Shiva Background */}
      <main className="pt-32" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)),url('./images/background.png')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}>
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center" >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6 text-blue-400">PRAYER IS THE KEY TO HEAVEN</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Donate Now
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Services
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: item * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-5xl text-orange-500">ॐ</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Service {item}</h3>
                  <p className="text-gray-600">Spiritual guidance and support for devotees seeking divine connection.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deities Section */}
        <section id="deities" className="py-24 bg-amber-100 text-orange-300">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12 text-orange-600"
            >
              Main Deities
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Shiva', 'Parvati', 'Ganesha', 'Kartikeya'].map((deity, index) => (
                <motion.div 
                  key={deity}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="aspect-square bg-amber-100 rounded-lg mb-3 flex  justify-center">
                      
                      <img src={`./images/${deity}.png`} alt={deity} />
                    </div>
                    <h3 className="text-xl font-medium">{deity}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-24 bg-orange-200 text-orange-600">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Upcoming Events
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'பிரதோஷ பூஜை (Pradosha Pooja)', date: '10/04/2025' },
                { name: 'பௌர்ணமி பூஜை (Pournami Pooja)', date: '12/04/2025' }
            
              ].map((event, index) => (
                <motion.div 
                  key={event.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md text-orange-900"
                >
                  <h3 className="text-xl font-medium mb-2">{event.name}</h3>
                  <p className="text-orange-600">Date: {event.date}</p>
                  <p className="mt-3 text-gray-600">Join us for this special celebration with rituals, prayers, and prasad.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-24">
          <div className="container mx-auto text-center ">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif mb-12 text-orange-400"
            >
              Join Us in Prayer
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center items-center flex-col md:flex-row"
            >
              <div className="text-5xl font-bold text-orange-600 mr-4">1000+</div>
              <p className="text-xl">Devotees have found peace and spiritual connection</p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-orange-50 text-blue-600">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-6"
            >
              Testimonials
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  name: 'Praveenkumar',
                  text: 'The spiritual guidance I received here transformed my life completely. The peaceful environment helps in connecting with the divine.'
                },
                {
                  name: 'Rakesh Kumar',
                  text: 'The temple has become my second home. The priest\'s knowledge and the community spirit make this place special.'
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md mb-6"
                >
                  <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-2xl text-orange-700">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="italic text-gray-600">"{testimonial.text}"</p>
                    <p className="mt-2 font-medium text-orange-800">- {testimonial.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* News & Blogs Section */}
        <section className="py-24">
          <div className="container mx-auto text-yellow-300">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Latest News & Blogs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Spiritual Practices for Modern Life',
                  excerpt: 'Discover how ancient spiritual practices can bring peace and balance to your fast-paced modern life.',
                  date: 'March 15, 2025'
                },
                {
                  title: 'Understanding Shiva: The Cosmic Destroyer',
                  excerpt: 'Explore the deep symbolism and spiritual significance of Lord Shiva in Hindu philosophy.',
                  date: 'March 5, 2025'
                }
              ].map((blog, index) => (
                <motion.div 
                  key={blog.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-medium text-orange-800 mb-2">{blog.title}</h3>
                  <p className="text-sm text-orange-600 mb-3">{blog.date}</p>
                  <p className="text-gray-600">{blog.excerpt}</p>
                  <button className="mt-4 text-orange-500 hover:text-orange-700 font-medium transition-colors">
                    Read More →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-orange-400 text-white">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-center mb-12"
            >
              Contact Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl mb-4">Temple Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <span className="mr-3">📍</span>
                    கீழ்வில்லிவலம் - துணையம்பட்டு சாலை, கீழ்வில்லிவலம் கிராமம், வந்தவாசி, திருவண்ணாமலை மாவட்டம்.
                     Kilvillivalam to Thunayambattu Road, Kilvillivalam Village, Vandavasi, Thiruvannamalai District - 604 408.
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">☎️</span>
                    +91 75581 10667
                  </p>
                  <p className="flex items-center">
                    <span className="mr-3">✉️</span>
                    shreevilvanathaeeshwararcharit@gmail.com
                  </p>
                  <div>
                    <h4 className="font-medium mb-2">Opening Hours:</h4>
                    <p>Weekdays: 6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM</p>
                    <p>Weekends: 5:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl mb-4">Send a Message</h3>
                <form className="space-y-4 bg-gray-300" style={{borderRadius:5,marginRight:100}}>
                  <div>
                    <input required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 rounded-lg text-orange-900"
                    />
                  </div>
                  <div>
                    <input required
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 rounded-lg text-orange-900"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message" 
                      rows={3}
                      className="w-full p-3 rounded-lg text-orange-900" style={{resize:'none'}}
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 ml-4   mb-2 rounded-lg transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <section id="about">
            <div>
              <h3 className="text-xl font-medium mb-4">Shri Shiva Temple</h3>
              <p>A place of peace, spirituality, and divine connection. Join us on the path to enlightenment.</p>
            </div>
            </section>
            <div>
              <h3 className="text-xl font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-orange-300 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-orange-300 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-orange-300 transition-colors">Services</a></li>
                <li><a href="#events" className="hover:text-orange-300 transition-colors">Events</a></li>
                <li><a href="#contact" className="hover:text-orange-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-orange-800 hover:bg-orange-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  FB
                </a>
                <a href="#" className="bg-orange-800 hover:bg-orange-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  IG
                </a>
                <a href="#" className="bg-orange-800 hover:bg-orange-700 transition-colors w-10 h-10 rounded-full flex items-center justify-center">
                  YT
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-800 text-center">
            <p>&copy; {new Date().getFullYear()} Shri Vilvandheeshwarar.org All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
