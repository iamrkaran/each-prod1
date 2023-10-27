"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft, 
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      text: "I love this cyberpunk social media platform! It's unlike anything I've ever experienced before. The immersive world and real-time messaging are fantastic.",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "This platform is a game-changer. The customizable avatars allow me to express myself in unique ways. It's the future of social networking.",
    },
    {
      id: 3,
      name: "Bob Cyberpunk",
      text: "I've been waiting for a platform like this for a long time. The cyberpunk world is mind-blowing, and I can connect with fellow cyber enthusiasts easily.",
    },
  ];

  

  return (
    // <div className="flex flex-col items-center justify-center " id="testimonials">
    //   <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
    //     What People Are Saying
    //   </h1>
    //   <div className="flex flex-col items-center">
    //     {testimonialData.map((testimonial) => (
    //       <div key={testimonial.id} className=" dark:bg-dark p-6 rounded-md shadow-md mb-6 max-w-md">
    //         <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
    //         <p className="text-gray-600 dark:text-gray-400 mt-4">- {testimonial.name}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <motion.div
    variants={slideInFromLeft(0.5)}   
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center"
    id="testimonials"
  >
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        What People Are Saying
     </h1>
    <div className="w-full flex flex-col items-center">
      {testimonialData.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
          className="dark:bg-dark p-6 rounded-md shadow-md mb-6 max-w-2xl sm:p-8"
        >
          <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-4">- {testimonial.name}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
  ); 
};

export default Testimonials; 
