import { Separator } from "@radix-ui/react-separator";
import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { skills } from "src/constants/data";
import { ResumeContext } from "./ResumeProvider";
import { cx } from "class-variance-authority";
import { selectedColumnsStyle } from "src/constants/Style";
import { ResumeColumn } from "src/types/Resume";

export const Skills = () => {
  const { selectedColumn } = useContext(ResumeContext);

  return (
    <Card
      className={cx(
        "w-[250px]",
        selectedColumn === ResumeColumn.ABOUT && selectedColumnsStyle
      )}
    >
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>My programming skills</CardDescription>
      </CardHeader>
      {skills.map((item, key) => {
        return (
          <>
            <CardContent>
              <p>{item.type.toUpperCase()}</p>
              {item.items.map((value, key) => (
                <div key={key}>{value}</div>
              ))}
              {item.highlights.map((value, key) => (
                <div key={key}>{value}</div>
              ))}
            </CardContent>
            {key !== skills.length - 1 && <Separator />}
          </>
        );
      })}
    </Card>
  );
};
