import { type NextPage } from "next";
import React from "react";
import Layout from "src/components/Layout";
import { Checkbox } from "src/components/ui/checkbox";
import { todoList } from "src/constants/data";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        I build things to prove my concept is feasible. Keep learning and grow.
        {todoList.map((item, key) => {
          const { actionItem } = item;
          return (
            <div className="mt-2 flex items-center space-x-2" key={key}>
              <Checkbox id={actionItem} disabled />
              <label
                htmlFor={actionItem}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {actionItem}
              </label>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
