import React, { useContext } from "react";
import { DataContext } from "../pages";

type Props = {};

const Activities = (props: Props) => {
  const { Activities } = useContext(DataContext);
  return (
    <div className="justify-start items-start pt-10">
      <h1 className="text-left text-3xl font-serif pl-10">Activities</h1>
      {Activities.map((Activity) => {
        return <p key={Activity.Title}>{Activity.Description} </p>;
      })}
    </div>
  );
};

export default Activities;
