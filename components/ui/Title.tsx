import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <p
        className="text-4xl text-center font-bold font-title 
          text-primary"
      >
        {title}
      </p>
      <hr
        className="w-20 my-2 h-[4px] bg-accent mx-auto border-0 
          rounded-full"
      />
    </div>
  );
};

export default Title;
