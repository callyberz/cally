import { type NextPage } from "next";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

// import Head from "next/head";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "../utils/api";
import Layout from "src/components/Layout";
import { education, experiences } from "src/constants/data";
import { Separator } from "src/components/ui/separator";

const Home: NextPage = () => {
  const renderEducation = React.useMemo(() => {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription>My previous study...</CardDescription>
        </CardHeader>
        {education.map((item, key) => {
          return (
            <>
              <CardContent>
                <p>{item.school}</p>
                <p>{item.location}</p>
                <p>{item.programme}</p>
                <p>{`${item.dateStart} ${item.dateEnd}`}</p>
              </CardContent>
              {key !== education.length - 1 && <Separator />}
            </>
          );
        })}
      </Card>
    );
  }, []);

  const renderExperiences = React.useMemo(() => {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Working Experience</CardTitle>
        </CardHeader>
        {experiences.map((item, key) => {
          return (
            <>
              <CardContent>
                <p>{item.company}</p>
                <p>{item.title}</p>
                <p>{item.location}</p>
                <p>{`${item.dateStart} ${item?.dateEnd ?? "now"}`}</p>
                {item.descriptions.map((value) => (
                  <>{value}</>
                ))}
              </CardContent>
              {key !== experiences.length - 1 && <Separator />}
            </>
          );
        })}
      </Card>
    );
  }, []);

  return (
    <>
      <Layout>
        {renderEducation}
        {renderExperiences}
      </Layout>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
