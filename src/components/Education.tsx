import React, { useContext } from "react";
import { DataContext } from "../pages";

type Props = {};

const Education = (props: Props) => {
  const { Education } = useContext(DataContext);
  return (
    <div className="justify-start items-start pt-10">
      <h1 className="text-left text-3xl font-serif pl-10">Education</h1>
      <div className=" border-dotted border-l-4">
        {Education.map((school) => {
          return (
            <div
              key={school.Years}
              className="flex flex-col  text-left justify-center items-ef p-5"
            >
              <div> {school.Years} </div>
              <h1 className="text-green-600 text-lg font-semibold">
                {school.Degree} - {school.School}
              </h1>
              <h3>{school.Description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
