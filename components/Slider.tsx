"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

export default function Review() {
  const reviews = [
    {
      name: "Samantha D.",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It has become my favorite go-to shirt.",
      date: "Posted on August 14, 2023",
    },
    {
      name: "Alex M.",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "Posted on August 15, 2023",
    },
    {
      name: "Ethan R.",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "Posted on August 16, 2023",
    },
    {
      name: "Olivia P.",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "Posted on August 17, 2023",
    },
    {
      name: "Liam K.",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "Posted on August 18, 2023",
    },
    {
      name: "Ava H.",
      text: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "Posted on August 19, 2023",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <div className="wrapper mx-auto px-4 relative max-w-screen-lg">
      {/* Title and Navigation */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex items-center gap-4">
          <button
            className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handlePrev}
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
            onClick={handleNext}
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Reviews Slider */}
      <div className="overflow-x-auto lg:overflow-hidden scroll-smooth snap-x snap-mandatory">
        <div className="flex flex-nowrap justify-start lg:justify-center gap-4">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-[90%] sm:w-[350px] md:w-[320px] h-auto p-4 border rounded-lg shadow-md bg-white snap-start"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#FFC633]" />
                  ))}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center mb-2">
                <span className="text-lg md:text-2xl font-bold mr-2">
                  {review.name}
                </span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-600 flex justify-center items-center text-white">
                  <TiTick size={18} />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm md:text-lg text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
