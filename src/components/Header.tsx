import React, { useContext } from "react";
import { DataContext } from "../pages";

type Props = {};

const Header = (props: Props) => {
  const { Information } = useContext(DataContext);
  
  return (
    <div className="flex flex-col gap-5 text-center justify-center items-center">
      <h1 className="text-5xl md:text-[5rem] leading-normal font-serif text-gray-500">
        Rose <span className="text-gray-800">Burrell</span>
      </h1>
      <h3 className="flex flex-col list-none md:list-disc md:flex-row gap-5 marker:text-sm text-gray-500 text-center">
        {Information.Location} <li>{Information.Phone_Number}</li>
      </h3>
      <h3 className="text-green-600 md:text-2xl">{Information.Email}</h3>
      <hr className="border-2 border-gray-500 w-screen rounded-lg"/>
      <h2 className="md:w-1/2 md:px-0 px-5">{Information.Description}</h2>
    </div>
  );
};

export default Header;
