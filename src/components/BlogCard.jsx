import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "Management/Customer Service",
    time: "5 min",
    title: "Top 10 Benefits of Using a Salon Booking App",
    description:
      "In our busy lives, convenience is key. People no longer have to make phone calls to schedule appointments or physically go to a salon only to be told they must wait[...]",
    linkText: "Read article",
    image: "https://images.pexels.com/photos/5938207/pexels-photo-5938207.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    category: "Technology/Future",
    time: "4 min",
    title: "The Future of Salon Appointments: Digital Booking Trends in 2025",
    description:
      "Time sensitivity defines trends within the beauty and wellness industry. 2025 will be shaped by digital platforms that streamline salon operations[...]",
    linkText: "Read article",
    image: "https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    category: "Lifestyle/Technology",
    time: "5 min",
    title: "5 Essential Features Every Salon Booking App Should Have",
    description:
      "Efficiency is key in beauty markets. A salon booking app improves appointment convenience and enhances the quality of service for owners and clients alike[...]",
    linkText: "Read article",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

{
        id: 4,
        category: "Trends",
        time: "5 min",
        title: "How Nearz is Revolutionizing Salon Bookings for the Busy You",
        description:
          "We get it—life is hectic. Between work, errands, and those endless to-do lists, finding time for yourself can feel like a luxury you just can’t afford. And let’s be honest, booking a salon appointment often adds to the stress. Calling salons, checking for available slots, and waiting around? It’s far from […]",
        linkText: "Read article",
        image: "https://images.pexels.com/photos/2809652/pexels-photo-2809652.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 5,
        category: "Customer Service",
        time: "5 min",
        title: "5 Reasons Why Online Salon Booking is the Future of Beauty Services",
        description:
          "Let’s be honest—life gets busy. Between juggling work, family, and everything in between, finding time for yourself can feel like a struggle. And when it comes to booking a salon appointment […]",
        linkText: "Read article",
        image: "https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 6,
        category: "Customer Service",
        time: "5 min",
        title: "Tired of Waiting at Salons? Here’s How Nearz Can Save Your Time",
        description:
          "We’ve all been there. You walk into a salon, hoping for a quick haircut or spa session, only to hear, “Please wait for 20 minutes,” which somehow turns into an hour. You watch the clock, scrolling on your phone, wishing you could be anywhere else […]",
        linkText: "Read article",
        image: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];

    const BlogCard = ({ id, category, time, title, description, linkText, image }) => {
        const navigate = useNavigate();

        const handleNavigate = () => {
          navigate(`/blogs/${id}`); // Corrected template literal syntax
        };
        
      
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={handleNavigate}
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">{category}</span> • {time}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm mb-4">{description}</p>
              <a href="#" className="text-[#F25435] font-medium hover:text-indigo-800 transition-colors">
                {linkText}
              </a>
            </div>
          </motion.div>
        );
      };
      
      export default function BlogSection() {
        return (
          <section className="py-10 bg-white overflow-x-hidden mt-5" id="blog-card">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="text-teal-500 font-bold text-sm md:text-base lg:text-xl md:-mt-4 mb-6">
                "Learn. Lead. Thrive. Take your salon to new heights. #TogetherWeGrow"
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} {...blog} />
                ))}
              </div>
            </div>
          </section>
        );
      }