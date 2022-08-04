import React, { useContext } from "react";
import { DataContext, ScreenContext } from "../pages";

type Props = {};

const Experience = (props: Props) => {
  const { Experience } = useContext(DataContext);
  const isMobile = useContext(ScreenContext);

  return (
    <div className="justify-start items-start pt-10">
      <h1 className="text-left text-3xl font-serif pl-10">Experience</h1>
      <div className=" border-dotted border-l-4">
        {Experience.map((Job) => {
          return (
            <div
              key={Job.Dates}
              className="flex flex-col  text-left justify-center items-ef p-5"
            >
              <div> {Job.Dates} </div>
              <h1 className="text-green-600">
                {Job.Title} -{" "}
                <span className="text-md text-gray-600">{Job.Employer}</span>
              </h1>
              {isMobile ? (
                <ExperienceCard Description={Job.Description} />
              ) : (
                <h3>{Job.Description}</h3>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

interface CardProps {
  Description: string;
}

const ExperienceCard = ({ Description }: CardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <>
          <div className="text-gray-600">{Description}</div>
        </>
      ) : (
        <div className="text-gray-600">
          {Description.slice(0, 240)}... SEE MORE
        </div>
      )}
    </button>
  );
};
