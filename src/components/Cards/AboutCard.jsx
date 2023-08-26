import React from "react";

function AboutCard({ img, heading, descriptions }) {
  return (
    <div className="bg-color-primary p-5 rounded-lg">
      <div className="bg-bg-secondary w-[250px] h-[200px] rounded-lg object-fill overflow-hidden">
        <img src={img} alt="about-image" className="scale-110" />
      </div>
      <p className="text-2xl font-bold text-bg-tertiary mt-2">{heading}</p>
      <div className="text-bg-primary max-w-[250px]">
        {descriptions.map((description, index) => (
          <p
            key={index}
            className="rounded-full border-bg-primary border-[1px] px-2 inline-block mt-1 mr-1"
          >
            {description}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
