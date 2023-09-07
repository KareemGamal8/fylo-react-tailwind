import React from "react";
import quotes from "../../../../assets/images/bg-quotes.png";
import { testimonialsData } from "../../data";

export default function Testimonials() {
  return (
    <div className="mt-[3rem] pt-8 mb-[16rem]">
      <div className="container wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3rem] relative ">
          <img
            src={quotes}
            alt="quotes"
            className="absolute top-[-3rem] left-0 lg:left-[-0.5rem]"
          />
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#21293C] py-8 px-6 flex flex-col gap-6"
            >
              <p className="text-white">{testimonial.description}</p>
              <div className="flex my-4 items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[3rem] rounded-[50%]"
                />
                <div>
                  <h5 className="text-md text-white">{testimonial.name}</h5>
                  <p className="text-sm text-gray-400">
                    {testimonial.jobTitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
