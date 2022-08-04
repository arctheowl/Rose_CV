/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Activities from "./Activities";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rose's CV</title>
        <meta name="description" content="Roses CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-left min-h-screen p-5 md:px-24">
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Activities />
      </main>
    </>
  );
};

export default Home;
