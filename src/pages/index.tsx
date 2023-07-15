import { type NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";
import { Education } from "src/components/Resume/Education";
import { ResumeProvider } from "src/components/Resume/ResumeProvider";
import { Skills } from "src/components/Resume/Skills";
import { Work } from "src/components/Resume/Work";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <ResumeProvider>
          <Skills />
          <Work />
          <Education />
        </ResumeProvider>
      </Layout>
    </>
  );
};

export default Home;
