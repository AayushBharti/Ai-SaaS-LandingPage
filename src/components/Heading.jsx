import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto 
      mb-12 lg:mb-20 `}
    >
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="bodey-2 mt-4 text-n-4 text-center">{text}</p>}
    </div>
  );
};

export default Heading;
