import React, { useContext } from "react";
import { DataContext } from "../pages";

type Props = {};

const Skills = (props: Props) => {
  const { Skills } = useContext(DataContext);
  return (
    <div className="justify-start items-start pt-10">
      <h1 className="text-left text-3xl font-serif pl-10">Skills</h1>
      <div className="grid grid-cols-2 marker:text-green-600 text-lg">
        {Skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </div>
    </div>
  );
};

export default Skills;
