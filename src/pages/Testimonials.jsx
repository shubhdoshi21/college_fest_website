import React from "react";
import images from "../assets/shubh/images";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Kiran Bedi",
      image: images.tes5,
      message: "The organizing team is full of enthusiasm and was amazing.",
    },
    {
      name: "Chetan Bhagat",
      image: images.tes4,
      message:
        "I have never seen such energy in any other college event. I hope it's contagious.",
    },
    {
      name: "Mylswamy Annadurai",
      image: images.tes3,
      message:
        "My absolute pleasure to the event, it was an extraordinary experience.",
    },
    {
      name: "Vivek Agnihotri",
      image: images.tes2,
      message:
        "Great management and charismatic skills. PARAMARSH was worth visiting.",
    },
    {
      name: "Technical Guruji",
      image: images.tes1,
      message:
        "One of the best experience of my life. The management of PARAMARSH was of the level of an IIT fest.",
    },
  ];
  return (
    <div className="flex justify-center w-screen h-96 sm:h-80 text-purple-300 overflow-hidden">
      {testimonialsData.map((testimonial, index) => (
        <React.Fragment key={index}>
          <h3 className={`text${index + 1} text-lg font-bold`}>
            {testimonial.name}
          </h3>
          <img
            src={testimonial.image}
            alt=""
            className={`img${index + 1} mt-12 w-60 h-60 sm:w-48 sm:h-48`}
          />
          <span
            className={`text${
              index + 1
            } text-lg font-bold mt-96 sm:mt-72 text-center`}
          >
            "{testimonial.message}"
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Testimonials;
