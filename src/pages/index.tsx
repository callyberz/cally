import { type NextPage } from "next";
import React from "react";
import Layout from "src/components/common/Layout";
import { TypographyH1 } from "src/components/common/TypographyH1";
import { Checkbox } from "src/components/ui/checkbox";
import { projects, todoList } from "src/constants/data";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { GithubIcon } from "lucide-react";

const Home: NextPage = () => {
  return (
    <Layout>
      <TypographyH1>Projects: </TypographyH1>
      <div className="grid gap-4 py-4 md:grid-cols-2">
        {projects.map(({ name, description, url }, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                {name}
                {url ? (
                  <GithubIcon
                    className="ml-2 inline-block cursor-pointer"
                    onClick={() => {
                      window.open(url, "_blank");
                    }}
                  />
                ) : null}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <TypographyH1>I build things. Keep learning and grow.</TypographyH1>
      {todoList.map((item, key) => {
        const { actionItem } = item;
        return (
          <div className="mt-2 flex items-center space-x-2" key={key}>
            <Checkbox id={actionItem} checked={item.finished} />
            <label
              htmlFor={actionItem}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {actionItem}
            </label>
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
